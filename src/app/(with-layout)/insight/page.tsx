"use client";

import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/faq/page";
import SignupCard from "@/components/signup/page";
import { useEffect, useState } from "react";

/** ---------------- Types ---------------- */

interface MediaFormat {
  url: string;
}

interface MediaAttributes {
  url?: string;
  formats?: Record<string, MediaFormat>;
}

interface MediaDataV4 {
  attributes?: MediaAttributes;
}

type MediaV4 = { data?: MediaDataV4 | null };
type MediaFlat = {
  url?: string;
  formats?: Record<string, MediaFormat>;
};

type Media = MediaV4 | MediaFlat;

interface Tag {
  id: number;
  label: string;
}

interface InsightFlat {
  id: number;
  title?: string;
  slug?: string;
  image?: Media;
  coverImage?: Media;
  description?: unknown;
  tags?: Tag[];
}

interface InsightAttr {
  id: number;
  attributes?: {
    title?: string;
    slug?: string;
    image?: Media;
    coverImage?: Media;
    description?: unknown;
    tags?: { data: { id: number; attributes: { label: string } }[] };
  };
}

type Insight = InsightFlat | InsightAttr;

/** ---------------- Helpers ---------------- */

function pickTitle(item?: Insight) {
  return (
    (item as InsightAttr)?.attributes?.title ??
    (item as InsightFlat)?.title ??
    "Untitled"
  );
}

function pickSlug(item?: Insight) {
  return (
    (item as InsightAttr)?.attributes?.slug ?? (item as InsightFlat)?.slug ?? ""
  );
}

function pickImagePath(item?: Insight): string | null {
  const a = (item as InsightAttr)?.attributes;

  const media = a?.coverImage || a?.image;

  const v4Medium =
    media && "data" in media
      ? media?.data?.attributes?.formats?.medium?.url
      : undefined;

  const v4Raw =
    media && "data" in media ? media?.data?.attributes?.url : undefined;

  const flat = ((item as InsightFlat)?.coverImage ||
    (item as InsightFlat)?.image) as MediaFlat | undefined;

  const flatMedium = flat?.formats?.medium?.url;
  const flatRaw = flat?.url;

  return v4Medium ?? v4Raw ?? flatMedium ?? flatRaw ?? null;
}

function pickDescription(item?: Insight): string {
  const desc =
    (item as InsightAttr)?.attributes?.description ??
    (item as InsightFlat)?.description ??
    "";

  if (typeof desc === "string") return desc;
  if (
    typeof desc === "object" &&
    desc !== null &&
    Array.isArray(desc) &&
    "children" in desc[0] &&
    Array.isArray(desc[0].children) &&
    typeof desc[0].children[0]?.text === "string"
  ) {
    return desc[0].children[0].text;
  }
  return "No description available.";
}

function pickTags(item?: Insight): string[] {
  const attrTags = (item as InsightAttr)?.attributes?.tags?.data;
  if (attrTags) return attrTags.map((tag) => tag.attributes.label);

  const flatTags = (item as InsightFlat)?.tags;
  if (flatTags) return flatTags.map((tag) => tag.label);

  return [];
}

function toAbsolute(src: string | null | undefined): string {
  if (!src) return "/images/Placeholder.png";
  if (src.startsWith("http")) return src;

  const base = process.env.NEXT_PUBLIC_CMS_API_URL?.replace(/\/$/, "") ?? "";
  const path = src.startsWith("/") ? src : `/${src}`;
  return `${base}${path}`;
}

/** ---------------- Page ---------------- */

const InsightPage = () => {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_CMS_API_URL}/api/articles?populate=*`,
          { cache: "no-store" }
        );
        const json: { data: Insight[] } = await res.json();
        setInsights(Array.isArray(json?.data) ? json.data : []);
      } catch (error) {
        console.error("Failed to fetch insights:", error);
        setInsights([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInsights();
  }, []);

  const featured = insights[0];
  const featuredImgSrc = toAbsolute(pickImagePath(featured));
  const featuredTitle = pickTitle(featured);
  const featuredSlug = pickSlug(featured);
  const featuredDescription = pickDescription(featured);
  const featuredTags = pickTags(featured);

  return (
    <div className="w-full relative bg-white">
      {/* Header */}
      <div className="lg:bg-[url('/icons/featuresPage/headerBg.svg')] lg:bg-cover lg:bg-center lg:h-[348px] w-full">
        <div className="container mx-auto relative">
          <div className="px-4 text-center lg:text-left flex flex-col  lg:absolute lg:top-[160px] w-full">
            <h1 className="text-black font-inter text-[56px] font-semibold leading-[122%]">
              Insight
            </h1>
            <h2 className="mt-[10px] text-black font-inter text-[17px] xl:text-[18px] 2xl:text-[20px] break-words whitespace-normal font-normal leading-[146%]">
              Built for 3PL warehouses, our software automates everything from
              inventory tracking
            </h2>
          </div>
          <div className="lg:block hidden absolute top-22 2xl:right-[-80px] right-[-45px]">
            <Image
              src="/icons/featuresPage/square.svg"
              alt="Header background"
              width={375}
              height={375}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        {/* FEATURED */}
        {featured && (
          <div className="px-4 lg:w-full mt-[80px]">
            <div className="flex lg:flex-row flex-col lg:w-full bg-black rounded-[30px]">
              <div className="lg:w-1/2 w-full md:min-h-[390px] min-h-[290px] lg:min-h-[490px] relative">
                <Image
                  src={featuredImgSrc}
                  alt={featuredTitle}
                  fill
                  className="object-cover p-[5px] rounded-[30px]"
                />
              </div>
              <div className="lg:w-1/2 lg:min-h=[490px] min-h-[340px] relative px-4 lg:px-0">
                <div className="flex flex-col lg:pl-[70px] xl:pr-[170px] lg:pt-[90px] pt-5 lg:pb-[50px] lg:h-full relative">
                <h1 className="text-white font-inter lg:text-[30px] text-[26px] font-normal leading-[140%] line-clamp-3">
  {featuredTitle}
</h1>
<p className="mt-[10px] text-white font-inter text-[16px] font-normal leading-[26px] line-clamp-3">
  {featuredDescription}
</p>


                  {featuredSlug && (
                    <Link
                      href={`/insight/${featuredSlug}`}
                      className="lg:mt-[40px] 2xl:mt-[60px] mt-[24px] hover:underline text-white font-inter text-[12px] 2xl:text-[14px] font-medium leading-[20px]"
                    >
                      Read More
                    </Link>
                  )}
   <div className="flex flex-wrap gap-[10px] mt-3 lg:absolute lg:bottom-0 lg:pb-[50px]">
  {featuredTags.map((tag) => (
    <span
      key={tag}
      className="
      inline-flex items-center
      bg-[#065AF1] text-white text-[12px]
      rounded-[30px] py-1 pl-[10px] pr-[12px]
      whitespace-nowrap overflow-hidden text-ellipsis
      lg:max-w-[100px]
      after:content-[''] after:inline-block after:w-[6px] after:flex-shrink-0
    "
    >
      #{tag}
    </span>
  ))}
</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* GRID LIST */}
        <div className="px-4 mt-[74px] mb-[100px] grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-[24px]">
          {isLoading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : insights.length === 0 ? (
            <p className="text-center text-gray-500">No insights found.</p>
          ) : (
            insights.map((item) => {
              const title = pickTitle(item);
              const slug = pickSlug(item);
              const imgSrc = toAbsolute(pickImagePath(item));
              const tags = pickTags(item);

              return (
                <Link href={slug ? `/insight/${slug}` : "#"} key={item.id}>
                  <div className="lg:w-[288px] lg:h-[350px] w-[360px] h-[322px] 2xl:w-[350px] 2xl:h-[400px] rounded-2xl p-1.5 overflow-hidden shadow-xl bg-black text-white flex flex-col cursor-pointer">
                    <div className="relative w-full h-full">
                      <Image
                        src={imgSrc}
                        alt={title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col justify-end h-full pl-5 pr-3 pb-3">
                      <h3
                        className="text-[20px] leading-[1.2] text-white font-normal mb-[10px] 
             line-clamp-2 overflow-hidden text-ellipsis"
                      >
                        {title}
                      </h3>
                      <div className="flex flex-wrap gap-[10px]">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="
                            inline-flex items-center
                            bg-[#065AF1] text-white text-[12px]
                            rounded-[30px] py-1 pl-[10px] pr-[12px]
                            whitespace-nowrap overflow-hidden text-ellipsis
                            lg:max-w-[100px]
                            after:content-[''] after:inline-block after:w-[6px] after:flex-shrink-0
                          "
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>

        {/* FAQ + Signup */}
        <div className="lg:max-w-[1440px] lg:mx-auto">
          <FAQSection />
        </div>
        <div>
          <SignupCard />
        </div>
      </div>
    </div>
  );
};

export default InsightPage;
