"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EmailVerifyPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [status, setStatus] = useState<"loading" | "success" | "already" | "error">("loading");

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
        const res = await axios.get(
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

        // ⏳ Başarı ya da zaten doğrulanmışsa → yönlendirme
        if (res.data.status || msg?.includes("already")) {
          setTimeout(() => {
            router.push("/login");
          }, 3000);
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center border border-gray-200">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">📩 Email Verification</h1>
        <p className="text-gray-700 text-sm mb-4">{statusMessage[status]}</p>

        {(status === "success" || status === "already") && (
          <p className="text-xs text-gray-400">Redirecting to login page...</p>
        )}
      </div>
    </div>
  );
}
