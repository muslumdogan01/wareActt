import Image from "next/image";

type SliderCardProps = {
  title: string;
  icon: React.ReactNode;
  iconPosition?: "top" | "bottom";
  width?: string;
  height?: string;
  hasBorder?: boolean;
};

const SliderCard = ({
  title,
  icon,
  iconPosition = "top",
  width = "",
  height = "",
  hasBorder = false,
}: SliderCardProps) => {
  const isImage = typeof icon === "string" && icon.includes("/");

  return (
    <div
      className={`relative ${width} ${height} max-w-[80vw] bg-white ${
        hasBorder ? "border border-[#C2C2C2] rounded-[30px] " : ""
      } shadow-[0_4px_20px_rgba(0,0,0,0.05)] lg:shadow-none m-8 lg:m-0 rounded-[40px] p-6  shrink-0 flex flex-col ${
        iconPosition === "top"
          ? "justify-between text-[20px] font-normal leading-[1.2] text-black "
          : "justify-end space-y-[10px] text-[26px] font-normal leading-[1.2] text-black"
      }`}
    >
      {iconPosition === "top" && (
        <div className="text-3xl">
          {isImage ? (
            <Image src={icon as string} alt="icon" width={60} height={60} />
          ) : (
            icon
          )}
        </div>
      )}

      {iconPosition === "bottom" && (
        <div className="text-3xl">
          {isImage ? (
            <Image src={icon as string} alt="icon" width={32} height={32} />
          ) : (
            icon
          )}
        </div>
      )}
      <div
        className=" "
        dangerouslySetInnerHTML={{ __html: title }}
      ></div>
    </div>
  );
};

export default SliderCard;
