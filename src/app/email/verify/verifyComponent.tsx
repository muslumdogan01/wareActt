"use client";
import "../../globals.css";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import WelcomePage from "./congrats/page";
import AlreadyVerified from "./alreadyVerified/page";
import Unsuccessful from "./unsuccessful/page";


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
    <>
      {status === "success" && <WelcomePage />}
      {status === "already" && <AlreadyVerified />}
      {status === "error" && <Unsuccessful />}
    </>
  );
}
