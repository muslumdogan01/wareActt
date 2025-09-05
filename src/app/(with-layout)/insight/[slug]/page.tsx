/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Grid } from "swiper/modules";

interface Tag {
  id: number;
  label: string;
}

interface CoverImage {
  url: string;
}

interface InsightData {
  id: number;
  title: string;
  slug: string;
  description: string;
  image?: CoverImage;
  tags?: Tag[];
}

const absUrl = (u?: string) =>
  u
    ? u.startsWith("http")
      ? u
      : `${process.env.NEXT_PUBLIC_CMS_API_URL}${u}`
    : "";

const InsightDetailPage = () => {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";

  const [insight, setInsight] = useState<InsightData | null>(null);
  const [loading, setLoading] = useState(true);

  // NEW: related items state
  const [related, setRelated] = useState<InsightData[]>([]);
  const [loadingRelated, setLoadingRelated] = useState(true);

  useEffect(() => {
    const fetchInsight = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_CMS_API_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`
        );
        const json = await res.json();
        const item = json.data?.[0];

        if (!item) {
          setInsight(null);
          return;
        }

        const descriptionText =
          item.description?.[0]?.children?.[0]?.text ||
          "No description available.";

        const imageUrl =
          typeof item.coverImage?.url === "string"
            ? item.coverImage.url
            : undefined;

        const tags: Tag[] = Array.isArray(item.tags)
          ? item.tags.map((tag: any) => ({
              id: tag.id,
              label: tag.label ?? "untitled",
            }))
          : [];

        const current: InsightData = {
          id: item.id,
          title: item.title,
          slug: item.slug,
          description: descriptionText,
          image: imageUrl ? { url: imageUrl } : undefined,
          tags,
        };

        setInsight(current);
      } catch (err) {
        console.error("Error fetching insight:", err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchInsight();
  }, [slug]);

  useEffect(() => {
    const fetchRelated = async () => {
      if (!slug) return;
      setLoadingRelated(true);
      try {
        const params = new URLSearchParams({
          "filters[slug][$ne]": slug,
          "pagination[limit]": "8",
          "sort[0]": "publishedAt:desc",
          populate: "*",
        }).toString();

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_CMS_API_URL}/api/articles?${params}`
        );
        const json = await res.json();

        const list: InsightData[] = (json?.data || []).map((it: any) => {
          const a = it.attributes ?? it;
          const img =
            a?.coverImage?.url ??
            a?.image?.data?.attributes?.url ??
            a?.image?.url ??
            undefined;

          const tgs: Tag[] = Array.isArray(a?.tags?.data)
            ? a.tags.data.map((t: any) => ({
                id: t.id,
                label: t.attributes?.label ?? t.attributes?.name ?? "untitled",
              }))
            : Array.isArray(a?.tags)
            ? a.tags.map((t: any) => ({
                id: t.id,
                label: t.label ?? t.name ?? "untitled",
              }))
            : [];

          return {
            id: it.id,
            title: a?.title ?? "Untitled",
            slug: a?.slug ?? `${it.id}`,
            description:
              a?.description?.[0]?.children?.[0]?.text ?? a?.description ?? "",
            image: img ? { url: img } : undefined,
            tags: tgs,
          };
        });

        setRelated(list);
      } catch (e) {
        console.error("Error fetching related:", e);
        setRelated([]);
      } finally {
        setLoadingRelated(false);
      }
    };

    fetchRelated();
  }, [slug]);

  if (loading) return <p className="text-center py-20">Loading...</p>;
  if (!insight) return <p className="text-center py-20">Not Found</p>;

  return (
    <div className="w-full bg-white">
      <div className="lg:bg-[url('/icons/content/insightDetail.svg')] lg:bg-cover lg:bg-center lg:h-[348px] w-full ">
        <div className="container mx-auto relative">
          <div className="px-4 flex flex-col lg:absolute lg:top-[130px] w-full ">
            <div>
              <Link
                href="/insight"
                className="inline-block  text-[#065AF1] text-sm font-medium border border-[#065AF1] px-4 py-2 rounded-full"
              >
                ← Back to Insight
              </Link>
            </div>
            <h2 className="whitespace-pre-line break-words text-black font-inter lg:text-[56px] text-[36px]  not-italic font-semibold leading-[122%] mt-[20px]">
              {insight.title}
            </h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto lg:mt-[100px] mt:[50px] mb-[200px] flex flex-col items-center text-center ">
        <div className="w-full max-w-[1300px] flex flex-col items-center px-4 lg:px-0">
          <div className="lg:w-[1016px] lg:h-[564px] w-[361px] h-[200px] relative rounded-xl mb-[50px]">
            <Image
              src={
                insight.image?.url
                  ? absUrl(insight.image.url)
                  : "/images/placeholder.png"
              }
              alt={insight.title}
              fill
              sizes="(min-width: 1024px) 1016px, 100vw"
              className="object-cover lg:rounded-2xl rounded-4xl px-1 lg:px-0"
            />
          </div>

          <div className="w-full flex justify-center px-4">
            <p className="w-full max-w-[1024px] text-left whitespace-pre-wrap break-words max-sm:break-all sm:break-words text-black font-inter text-[18px] font-normal leading-[160%]">
              {insight.description}
            </p>
          </div>

          <div className="w-full h-[1px] max-w-[1260px] bg-[rgba(0,0,0,0.08)] my-[100px] " />

          <div className="w-full ">
            <h2 className="text-left px-5 mb-[30px] text-[36px] font-semibold leading-[132%] text-black">
              You may also like
            </h2>
          </div>

          <div className="w-full max-w-[1400px] pl-5 lg:pl-0">
            <Swiper
              slidesPerView="auto"
              modules={[Grid]}
              className="w-full"
              breakpoints={{
                640: {
                  slidesPerView: 2,

                  spaceBetween: 0,
                  allowTouchMove: true,
                },
                768: {
                  slidesPerView: 2,

                  spaceBetween: 24,
                  allowTouchMove: true,
                },
                1024: {
                  slidesPerView: 3,
                  grid: { rows: 2, fill: "row" },
                  spaceBetween: 24,
                  allowTouchMove: true,
                },
                1500: {
                  slidesPerView: 4,
                  allowTouchMove: false,
                  spaceBetween: 24,
                },
              }}
              allowTouchMove
            >
              {(loadingRelated ? [...Array(4)] : related).map(
                (item: any, i: number) => (
                  <SwiperSlide
                    key={item?.id ?? i}
                    style={{ width: "auto" }}
                    className="flex "
                  >
                    <Link
                      href={item?.slug ? `/insight/${item.slug}` : "#"}
                      className="w-[288px] h-[350px]  rounded-2xl p-1.5 overflow-hidden shadow-xl bg-black text-white flex flex-col"
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={
                            item?.image?.url
                              ? absUrl(item.image.url)
                              : "/images/insight/insight.png"
                          }
                          alt={item?.title ?? "Warehouse"}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex flex-col justify-end h-full pl-5 pr-2 text-left">
                        <h3 className="text-[20px] leading-[1.2] line-clamp-2 overflow-hidden text-ellipsis text-white font-normal mb-[10px]">
                          {item?.title ?? "Suspendisse mattis non leo"}
                        </h3>
                        <div className="flex gap-[10px] mb-[15px]">
                          {(item?.tags ?? []).slice(0, 2).map((t: Tag) => (
                            <span
                              key={t.id}
                              className="bg-[#065AF1] text-[12px] leading-[1.2] text-white font-normal px-[10px] py-[4px] rounded-[30px]"
                            >
                              #{t.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightDetailPage;
