"use client";
import React, { useState } from "react";
import FAQSection from "@/components/faq/page";
import Image from "next/image";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // honeypot (botlar için)
    if ((fd.get("website") as string)?.trim()) {
      form.reset();
      return;
    }

    const payload = {
      name: (fd.get("name") as string) || "",
      company: (fd.get("company") as string) || "",
      email: (fd.get("email") as string) || "",
      phone: (fd.get("phone") as string) || "",
      message: (fd.get("message") as string) || "",
      website: (fd.get("website") as string) || "",
    };

    try {
      setStatus("loading");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        form.reset();
        setStatus("success");
        // 4 sn sonra mesajı gizle (opsiyonel)
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="w-full relative bg-white  ">
      <div className="lg:bg-[url('/icons/featuresPage/headerBg.svg')] lg:bg-cover lg:bg-center lg:h-[348px] w-full ">
        <div className="container mx-auto relative">
          <div className="px-4 text-center lg:text-left flex flex-col lg:absolute lg:top-[160px] w-full ">
            <h1 className="text-black font-inter  text-[56px] not-italic font-semibold leading-[122%]">
              Contact
            </h1>
            <h2 className="mt-[10px] text-black font-inter text-[18px] not-italic font-normal leading-[146%]">
              We’re always here to help. Feel free to reach out with any
              questions.
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
                New Jersey
              </h1>
              <p className="pt-[10px] font-normal text-[18px] leading-[1.46] text-black ">
                272 US-46 Elmwood Park, <br /> NJ 07407
              </p>

              <div className="pt-[30px] flex space-x-4 ">
                <Image
                  src="/icons/contact/phone.svg"
                  alt="phone Icon"
                  width={24}
                  height={24}
                />
                <span>+1 (908) 244-6809 </span>
              </div>
              <div className="pt-[10px] flex space-x-4">
                <Image
                  src="/icons/contact/email.svg"
                  alt="email Icon"
                  width={24}
                  height={24}
                />
                <span>support@wareact.com </span>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col md:w-[808px] h-[650px] md:rounded-[40px] md:border md:border-[rgba(6,90,241,0.1)] 
             shadow-none md:shadow-[0px_20px_80px_-20px_#0000001A,inset_0px_0px_30px_-4px_#0A28BF0F]"
          >
            <div className="h-full md:pl-[40px] pl-[20px] pt-[40px]  flex flex-col">
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
                Shoot your message!
              </h1>
              <p className="pt-[10px] font-normal text-[18px] leading-[1.46] text-black ">
                We are here to help.
              </p>

              <form className="w-full mt-[30px] pr-[40px]" onSubmit={handleSubmit}>
                {/* honeypot */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="First & Last Name"
                    className="w-full px-4 py-3 rounded-md border border-[rgba(0,0,0,0.1)]  text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    className="w-full px-4 py-3 rounded-md border border-[rgba(0,0,0,0.1)]  text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-[rgba(0,0,0,0.1)]  text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    className="w-full px-4 py-3 rounded-md border border-[rgba(0,0,0,0.1)]  text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="w-full pt-4">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    placeholder="Type your message here..."
                    className="w-full p-4 border border-gray-300 rounded-lg resize-none overflow-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{ maxHeight: "200px" }}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full mt-6 py-3 cursor-pointer bg-[#065AF1] text-white text-sm font-medium rounded-full hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>

                {/* başarı / hata bildirimi (stili sade tutuyoruz) */}
                <div aria-live="polite" className="min-h-[20px]">
                  {status === "success" && (
                    <p className="mt-3 text-sm text-green-600">
                      Message sent successfully ✅
                    </p>
                  )}
                  {status === "error" && (
                    <p className="mt-3 text-sm text-red-600">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="w-full bg-[rgba(0,0,0,0.08)] mt-[100px] h-[1px]"></div>

        <div className=" min-h-[50vh] lg:max-w-[1440px] lg:mx-auto">
          <FAQSection limit={5} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
