"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const insightItems = [
  {
    image: "/images/insight/insight.png",
    title: "Suspendisse mattis non leo",
    slug: "suspendisse-mattis-non-leo",
    tags: ["#dropshiping", "#e-commerce"],
    content: "Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat",
  },
  {
    image: "/images/insight/ins2.png",
    title: "Cras gravida convallis",
    slug: "cras-gravida-convallis",
    tags: ["#logistics", "#b2b"],
    content: "Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat",
  },
  {
    image: "/images/insight/ins3.png",
    title: "Curabitur blandit tempus",
    slug: "curabitur-blandit-tempus",
    tags: ["#digital", "#marketing"],
    content: "Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat",
  },
  {
    image: "/images/insight/ins4.png",
    title: "Aliquam tincidunt mauris",
    slug: "aliquam-tincidunt-mauris",
    tags: ["#automation", "#technology"],
    content: "Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat",
  },
];

const InsightDetailPage = () => {
  const params = useParams();
  const slug = params?.slug;
  const selectedItem = insightItems.find((item) => item.slug === slug);

  if (!selectedItem) {
    return <p className="text-center py-20">Not Found</p>;
  }

  return (
    <div className="w-full bg-white">
      <div className="bg-[url('/icons/content/insightDetail.svg')] bg-cover bg-center h-[348px] w-full ">
        <div className="container mx-auto relative">
          <div className="px-4 flex flex-col absolute top-[130px] w-full ">
            <div>
              <Link
                href="/insight"
                className="inline-block  text-[#065AF1] text-sm font-medium border border-[#065AF1] px-4 py-2 rounded-full"
              >
                ← Back to Insight
              </Link>
            </div>
            <h2 className="text-black font-inter text-[56px] not-italic font-semibold leading-[122%] mt-[20px]">
              {selectedItem.title}
            </h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-[160px] flex flex-col items-center text-center ">
        <div className="w-full max-w-[1300px] flex flex-col items-center">
          <div className="w-full h-[764px] relative rounded-xl mb-8">
            <Image
              src={selectedItem.image}
              alt={selectedItem.title}
              fill
              className="w-full h-[564px] object-cover rounded-2xl"
            />
          </div>

          <p className=" w-full max-w-[1300px] text-left text-black font-inter text-[18px] font-normal leading-[160%] mb-10">
            {selectedItem.content}
          </p>

          <h2 className="text-2xl font-semibold mb-6">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {insightItems
              .filter((item) => item.slug !== slug)
              .slice(0, 3)
              .map((item, i) => (
                <Link
                  key={i}
                  href={`/insight/${item.slug}`}
                  className="block rounded-2xl bg-black overflow-hidden shadow-md hover:scale-[1.02] transition-all"
                >
                  <div className="w-full h-[200px] relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-white">
                    <h3 className="text-[18px] font-medium mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <div className="flex gap-2 flex-wrap">
                      {item.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-[#065AF1] px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightDetailPage;
