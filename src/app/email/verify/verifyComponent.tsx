"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

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
        console.log(`${process.env.NEXT_PUBLIC_API_BASE_URL}/email/verify?id=${id}&hash=${hash}&depotid=${depotid}`);

        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/email/verify?id=${id}&hash=${hash}&depotid=${depotid}`
        );

        const msg = res.data.message?.toLowerCase();

        if (msg?.includes("already")) {
          setStatus("already");
        } else if (res.data.status) {
          setStatus("success");
        } else {
          setStatus("error");
        }

        if (res.data.status || msg?.includes("already")) {
          setTimeout(() => {
            router.push("/login");
          }, 3000);
        }
      } catch (err) {
        console.error("Verification failed:", err);
        setStatus("error");
      }
    };

    verifyEmail();
  }, [searchParams, router]);

  const statusMessage = {
    loading: "⏳ Verifying your email...",
    success: "✅ Your email has been successfully verified!",
    already: "⚠️ Your email was already verified. Redirecting...",
    error: "❌ Verification failed. Invalid or expired link.",
  };

  const illustrationSrc = {
    loading: "/images/verify/loading.svg",
    success: "/images/verify/success.svg",
    already: "/images/verify/already.svg",
    error: "/images/verify/error.svg",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center border border-gray-200 animate-fade-in">
        <Image
          src={illustrationSrc[status]}
          alt="status illustration"
          width={120}
          height={120}
          className="mx-auto mb-4 transition-all duration-300"
        />

        <h1 className="text-2xl font-bold text-blue-600 mb-3">
          📩 Email Verification
        </h1>
        <p className="text-gray-700 text-sm mb-3">{statusMessage[status]}</p>

        {(status === "success" || status === "already") && (
          <p className="text-xs text-gray-400 animate-pulse">
            Redirecting to login page...
          </p>
        )}
      </div>
    </div>
  );
}
