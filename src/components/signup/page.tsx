"use client"

import { useState, type ChangeEvent } from "react"

export default function SignupCard() {
  const [email, setEmail] = useState("")

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  return (
    <div className="flex items-center justify-center px-4  mb-60">
      <div className="w-[361px] h-[370px] lg:w-[1224px] lg:h-[255px] rounded-[30px] bg-blue-500 lg:bg-transparent lg:bg-[url('/icons/signup/bg.svg')]  lg:bg-no-repeat lg:bg-cover  flex flex-col">
        <div className="flex-1 w-full flex flex-col lg:flex-row justify-center  lg:justify-evenly  lg:items-center">
          <h2 className="text-white text-3xl font-normal text-center lg:text-left mb-[30px] leading-[1.3]">
            Take the first step <br className="hidden lg:block" /> to create your account
          </h2>

          <div className="space-y-5 lg:flex ">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="w-full lg:w-[392px] h-14 lg:h-[70px] rounded-[10px] lg:rounded-br-none lg:rounded-tr-none bg-white border-none text-black/40 font-inter text-base not-italic font-normal leading-[1.36] pl-5 focus:outline-none focus:ring-0 focus:border-transparent"
            />

            <button
              className="w-full lg:w-[104px] h-14 lg:h-[70px]  bg-black hover:bg-black/90 text-white rounded-[10px] lg:rounded-bl-none lg:rounded-tl-none  font-medium transition-colors"
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
