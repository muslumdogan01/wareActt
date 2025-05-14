import Image from "next/image";

type SliderCardProps = {
  title: string;
  icon: React.ReactNode;
  iconPosition?: "top" | "bottom";
  width?: string;
  height?: string;
};

const SliderCard = ({
  title,
  icon,
  iconPosition = "top",
  width = "w-[200px]",
  height = "h-[240px]",
}: SliderCardProps) => {
  const isImage = typeof icon === "string" && icon.includes("/");

  return (
    <div
      className={`relative ${width} ${height} max-w-[80vw]  bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] lg:shadow-none m-8 lg:m-0 rounded-2xl p-6 text-lg font-semibold shrink-0 flex flex-col items-start justify-between`}
    >


      {/* Kartın içeriği */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between ">
        {iconPosition === "top" && (
          <div className="text-3xl">
            {isImage ? (
              <Image src={icon as string} alt="icon" width={32} height={32} />
            ) : (
              icon
            )}
          </div>
        )}

        <div className="text-[20px] font-normal leading-[1.2] text-black ">{title}</div>

        {iconPosition === "bottom" && (
          <div className="text-3xl">
            {isImage ? (
              <Image src={icon as string} alt="icon" width={32} height={32} />
            ) : (
              icon
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SliderCard;
