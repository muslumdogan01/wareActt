"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import axios from "axios"

export default function VerifySentPage() {
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<"checking" | "success" | "error">("checking")

  useEffect(() => {
    const id = searchParams.get("id")
    const hash = searchParams.get("hash")
    const depotid = searchParams.get("depotid")

    if (id && hash && depotid) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/email/verify/${id}/${hash}?depotid=${depotid}`)
        .then((res) => {
          console.log("✅ Verified!", res.data)
          setStatus("success")
        })
        .catch((err) => {
          console.error("❌ Verification failed", err)
          setStatus("error")
        })
    } else {
      setStatus("error")
    }
  }, [searchParams])

  return (
    <div className="text-center mt-10">
      {status === "checking" && <p>🔍 Checking your verification link...</p>}
      {status === "success" && <p className="text-green-600">✅ Your email has been successfully verified!</p>}
      {status === "error" && <p className="text-red-600">❌ Verification failed. Please try again or contact support.</p>}
    </div>
  )
}
