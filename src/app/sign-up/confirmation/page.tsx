// app/sign-up/welcome/page.tsx

import Image from "next/image";

export default function WelcomePage() {
  return (
    <div className="bg-[#F4F4F4] flex flex-col justify-center items-center h-full w-full relative">
      <div className=" bg-white flex flex-col justify-center items-center rounded-[20px] py-[80px] space-y-[20px] px-[89px] ">
        <Image
          width={58}
          height={50}
          src={"/icons/signup/logo.svg"}
          alt={"wareactlogo"}
        />
        <h1 className="text-[24px] font-semibold leading-[24px] tracking-[-0.24px] text-center">
          Email Confirmation
        </h1>
        <p className="text-[14px] font-medium leading-[22px] text-[#A1A5B7] text-center">
     Please verify your email with the link we sent to your email.
        </p>
        <a
          href="https://mail.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#3492ff] hover:bg-[#1c78e6] text-white text-sm font-medium px-6 py-2 rounded-lg transition"
        >
          Open Gmail
        </a>

      </div>
              <div className="w-full flex justify-center absolute bottom-[27px] items-center space-x-[10px] ">
                <p className="flex text-center ">
                  <span className="text-[14px] text-[#181C32] italic font-normal leading-[24px] ">
                    Created by&nbsp;
                  </span>
                  <span className="text-[14px] text-[#181C32] font-semibold leading-[24px] ">
                    WAREACT
                  </span>
                </p>
                <span className="w-[1px] h-[38px] bg-[#D9D9D9] "></span>
                <span>
                  <Image
                    src={"/icons/signup/footer.png"}
                    height={24}
                    width={110}
                    alt={"wareact"}
                    className="opacity-100"
                  />
                </span>
              </div>
    </div>
  );
}
