'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function VerifyPage() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  const id = searchParams.get('id');
  const hash = searchParams.get('hash');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const depotid = searchParams.get('depotid');

  useEffect(() => {
    if (id && hash) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/email/verify/${id}/${hash}`)
        .then(() => setStatus("success"))
        .catch(() => setStatus("error"));
    } else {
      setStatus("error");
    }
  }, [id, hash]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="Logo" className="w-14 h-14" />
        </div>

        {status === "loading" && (
          <>
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">Verifying your email...</h1>
            <p className="text-gray-500">Please wait while we confirm your account.</p>
          </>
        )}

        {status === "success" && (
          <>
            <h1 className="text-2xl font-semibold text-green-600 mb-2">🎉 Email Verified!</h1>
            <p className="text-gray-600">Your email has been successfully verified.</p>
            <a
              href="/login"
              className="mt-6 inline-block bg-green-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition"
            >
              Go to Login
            </a>
          </>
        )}

        {status === "error" && (
          <>
            <h1 className="text-2xl font-semibold text-red-600 mb-2">❌ Verification Failed</h1>
            <p className="text-gray-600">The verification link is invalid or expired.</p>
          </>
        )}
      </div>
    </div>
  );
}
