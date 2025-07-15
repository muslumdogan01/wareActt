"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import WelcomePage from "@/components/congrats/page";
import AlreadyVerified from "@/components/alreadyVerified/page";
import Unsuccessful from "@/components/unsuccessful/page";

export default function EmailVerifyPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [status, setStatus] = useState<
    "loading" | "success" | "already" | "error"
  >("loading");

  useEffect(() => {
    const id = searchParams.get("id");
    const hash = searchParams.get("hash");
    const depotid = searchParams.get("depotid");

    if (!id || !hash || !depotid) {
      setStatus("error");
      return;
    }

    const verifyEmail = async () => {
      try {
        console.log(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/email/verify?id=${id}&hash=${hash}&depotid=${depotid}`
        );

        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/email/verify/${id}/${hash}`
        );

        const msg = res.data.message?.toLowerCase();

        if (msg?.includes("already")) {
          setStatus("already");
        } else if (res.data.status) {
          setStatus("success");
        } else {
          setStatus("error");
        }
      } catch (err) {
        console.error("Verification failed:", err);
        setStatus("error");
      }
    };

    verifyEmail();
  }, [searchParams, router]);



  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] px-4">
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] px-4">
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center border border-gray-200 animate-fade-in">
      {status === "loading" && (
        <>
          <Image
            src="/images/verify/loading.svg"
            alt="Loading"
            width={120}
            height={120}
            className="mx-auto mb-4"
          />
          <p className="text-gray-700 text-sm">⏳ Verifying your email...</p>
        </>
      )}

      {status === "success" && <WelcomePage />}
      {status === "already" && <AlreadyVerified />}
      {status === "error" && <Unsuccessful />}
    </div>
  </div>
    </div>
  );
}
