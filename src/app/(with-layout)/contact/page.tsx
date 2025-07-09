import FAQSection from "@/components/faq/page";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full relative bg-white 4xl:h-full ">
      <div className="lg:bg-[url('/icons/featuresPage/headerBg.svg')] lg:bg-cover lg:bg-center lg:h-[348px] w-full ">
        <div className="container mx-auto relative">
          <div className="px-4 text-center lg:text-left flex flex-col lg:absolute lg:top-[160px] w-full ">
            <h1 className="text-black font-inter  text-[56px] not-italic font-semibold leading-[122%]">
              Contact
            </h1>
            <h2 className="mt-[10px] text-black font-inter text-[18px] not-italic font-normal leading-[146%]">
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

      <div className="container mx-auto ">
        <div className="flex md:flex-row w-full flex-col md:space-x-[24px] justify-center items-center md:items-start pt-[80px]">
          <div
            style={{
              boxShadow: `0px 20px 80px -20px #0000001A, inset 0px 0px 30px -4px #0A28BF0F`,
            }}
            className="flex flex-col  w-[361px] md::w-[392px]  h-[450px]  rounded-[40px] border border-[rgba(6,90,241,0.1)] "
          >
            <div className="h-full pl-5 pt-[40px] pb-[77px] flex flex-col">
              <div>
                <Image
                  src={"icons/contact/adress.svg"}
                  width={0}
                  height={0}
                  alt="Contact"
                  className="object-cover w-[92px] h-[92px]"
                />
              </div>
              <h1 className="pt-[50px] font-normal text-[30px] leading-[1.20] text-black ">
                Newyork
              </h1>
              <p className="pt-[10px] font-normal text-[18px] leading-[1.46] text-black ">
                434 Broadway, Floor 3 New York <br /> NY 10013 United States
              </p>
              <span className="pt-[30px] ">[ T ] +90 (123) 123 45 67</span>
              <span className="pt-[10px]">[ M ] info@wareact.com</span>
            </div>
          </div>
          <div
            style={{
              boxShadow: `0px 20px 80px -20px #0000001A, inset 0px 0px 30px -4px #0A28BF0F`,
            }}
            className="flex flex-col md:w-[808px] h-[621px] md:rounded-[40px] md:border md:border-[rgba(6,90,241,0.1)] "
          >
            <div className="h-full md:pl-[40px] pl-[20px] pt-[40px] pb-[77px] flex flex-col">
              <div className="hidden md:block">
                <Image
                  src={"icons/contact/contactTeam.svg"}
                  width={0}
                  height={0}
                  alt="Contact"
                  className="object-cover w-[92px] h-[92px]"
                />
              </div>
              <h1 className="pt-[50px] font-normal text-[30px] leading-[1.20] text-black ">
                Contact WareAct’s Sales Team
              </h1>
              <p className="pt-[10px] font-normal text-[18px] leading-[1.46] text-black ">
                Feel free to write to us on any subject.
              </p>

              <form className="w-full mt-[30px] pr-[40px] ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-md border border-[rgba(0,0,0,0.1)]  text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-md border border-[rgba(0,0,0,0.1)]  text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-md border border-[rgba(0,0,0,0.1)]  text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-4 py-3 rounded-md border border-[rgba(0,0,0,0.1)]  text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-4 py-3 rounded-md border border-[rgba(0,0,0,0.1)]  text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <select className="w-full px-4 py-3 rounded-md border border-[rgba(0,0,0,0.1)]  text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Country</option>
                    <option value="ireland">Ireland</option>
                    <option value="turkey">Turkey</option>
                    <option value="germany">Germany</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 py-3 bg-[#065AF1] text-white text-sm font-medium rounded-full hover:bg-blue-700 transition"
                >
                  Contact Us
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full bg-[rgba(0,0,0,0.08)] mt-[150px] h-[1px]"></div>

        <div className="lg:max-w-[1440px] lg:mx-auto">
          <FAQSection />
        </div>
      </div>
    </div>
  );
};

export default Contact;
