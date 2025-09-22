"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Article {
  id: number;
  title: string;
  description: string;
  image?: {
    url: string;
  };
  tags?: { id: number; label: string }[];
}


const InsightWeb = () => {
      const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

        useEffect(() => {
        const fetchArticles = async () => {
          try {
            const res = await fetch(
              `${process.env.NEXT_PUBLIC_CMS_API_URL}/api/articles?populate=*`
            );
            const data = await res.json();
            setArticles(data.data || []);
          } catch (error) {
            console.error("Error fetching articles:", error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchArticles();
      }, []);


  return (
    <div className="w-full ">
      <div className=" flex  justify-between items-center  mb-[35px]">
        <h1 className="text-4xl text-black font-semibold leading-[1.3] ">
          Insight
        </h1>
<Link href="/insight" className="cursor-pointer hover:bg-blue-50 inline-flex items-center px-[20px] py-[10px] gap-[10px] rounded-[100px] border border-[#065AF1] text-[#065AF1] font-inter text-[14px] not-italic font-semibold leading-[140%]">
More Insight
</Link>
      </div>
      <div className="flex w-full space-x-[24px]">
              {loading && <p>Loading…</p>}
        {articles.slice(0, 4).map((article, index) => (
          <Link
            key={index}
      href="/insight"
      prefetch={false}
            aria-label={`Open insight`}
            className="w-[288px] h-[350px] rounded-2xl p-1.5 overflow-hidden shadow-xl bg-black text-white flex flex-col"
          >
            <div className="relative w-full h-full">
              <Image
                 src={
                      article.image?.url
                        ? `${process.env.NEXT_PUBLIC_CMS_API_URL}${article.image.url}`
                        : "/images/insight/insight.png"
                    }
                    alt={article.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Alt içerik */}
            <div className="flex flex-col justify-end h-full pl-5">
              <h3 className="text-[20px] leading-[1.2] text-white font-normal mb-[10px]">
                 {article.title}
              </h3>

       <div className="flex gap-[10px] mb-[15px] flex-wrap">
                 {article.tags?.map((tag) => (
                  <span
                    key={tag.id}
                    className="bg-[#065AF1] text-[12px] leading-[1.2] text-white font-normal px-[10px] py-[4px] rounded-[30px]"
                  >
                    #{tag.label || "tag"}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InsightWeb;
