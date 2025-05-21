"use client"

import { useState, type ChangeEvent } from "react"

export default function SignupCard() {
  const [email, setEmail] = useState("")

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  return (
    <div className="flex items-center justify-center px-4 pb-[100px]">
      <div className="w-[361px] h-[370px] rounded-[30px] border-4 p-4 border-black/10 bg-[#065AF1] shadow-[0px_50px_60px_-30px_rgba(0,0,0,0.20)]  flex flex-col">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-white text-3xl font-normal text-center mb-[30px] leading-[1.3]">
            Take the first step to create your account
          </h2>

          <div className="space-y-5">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="w-full h-14 rounded-[10px] bg-white border-none text-black/40 font-inter text-base not-italic font-normal leading-[1.36] pl-5 "
            />

            <button
              className="w-full h-14 bg-black hover:bg-black/90 text-white rounded-[10px] font-medium transition-colors"
              type="button"
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
