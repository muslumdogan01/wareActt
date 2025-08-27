import Image from "next/image";

const DeliveryInfo = () => {
  return (
    <div className="w-full flex justify-center items-center px-4  ">
      {/* Ana container: yan yana hizalama */}
      <div className="lg:max-w-[1280px] w-full flex py-[100px]  lg:py-15  flex-col lg:flex-row gap-4 lg:gap-16 justify-center items-center relative">
        <h2 className="lg:absolute z-40 lg:top-28 text-center lg:left-42 text-[35px] font-semibold leading-[1.32] text-black">
          Designed for Smart <br className="lg:hidden block" /> ve{" "}
          <br className="hidden lg:block" /> Management of 3PLs
        </h2>
        <div className="w-full lg:w-1/2 lg:h-[500px] relative flex justify-center items-center ">
          {/* Orta kutu */}
          <div className="hidden lg:block w-[500px] h-[462px] absolute left-1/2 transform -translate-x-1/2 z-30">
            <Image
              src="/icons/content/delivery1.svg"
              alt="orta Kargo Kutusu"
              fill
              className="object-contain"
            />
          </div>

          {/* Alt kutular */}
          <div className="hidden lg:block w-[350px] h-[350px] absolute top-[290px] left-[30%] transform -translate-x-1/2 z-20">
            <Image
              src="/icons/content/delivery2.svg"
              alt="orta Kutu"
              fill
              className="object-contain"
            />
          </div>

          <div className="hidden lg:block w-[150px] h-[173px] absolute top-[303px] left-[8%] transform -translate-x-1/2 z-10">
            <Image
              src="/icons/content/delivery3.svg"
              alt="küçük Kargo Kutusu"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Metin */}
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-[496px] text-[18px] text-center lg:text-left leading-[1.6] font-normal text-[#333] space-y-4">
            <p>
              Experience a powerful, intuitive platform designed to simplify
              every step of warehouse operations. Gain real-time visibility,
              automate key tasks, and keep your clients informed every moment.
              Our software helps you work faster, reduce errors, and scale
              effortlessly—no matter the size of your logistics network.
            </p>
            <p>
              We combine smart technology with a user-friendly experience to
              help you deliver exceptional service. From onboarding to
              day-to-day management, our platform ensures smooth operations and
              satisfied clients. Stay ahead of the competition, unlock new
              opportunities, and take your 3PL business to the next level with
              confidence and control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
