"use client"

import { useState, type ChangeEvent } from "react"

export default function SignupCard() {
  const [email, setEmail] = useState("")

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  return (
    <div className="flex items-center justify-center px-4  lg:mb-60">
      <div className="w-[361px] h-[370px] lg:w-[1224px] lg:h-[257px] mb-[100px] lg:mb-0 2xl:h-[255px] rounded-[30px] bg-[#065AF1] lg:bg-transparent lg:bg-[url('/icons/signup/bg.svg')]  lg:bg-no-repeat lg:bg-cover  flex flex-col">
        <div className="flex-1 w-full flex flex-col lg:flex-row justify-center px-1 lg:justify-evenly  lg:items-center">
          <h2 className="text-white text-3xl font-normal text-center lg:text-left mb-[30px] lg:mb-0 leading-[1.3]">
          Join our newsletter  <br className="hidden lg:block" /> for new features!
          </h2>
           
          <div className="space-y-5 lg:space-y-0 flex flex-col lg:flex-row justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="w-[329px] 2xl:w-[392px] h-14 lg:h-[70px] rounded-[10px] lg:rounded-br-none lg:rounded-tr-none bg-white border-none text-black/40 font-inter text-base not-italic font-normal leading-[1.36] pl-5 focus:outline-none focus:ring-0 focus:border-transparent"
            />

            <button
              className="w-[329px] cursor-pointer lg:w-[104px] h-14 lg:h-[70px]  bg-black hover:bg-black/60 text-white rounded-[10px] lg:rounded-bl-none lg:rounded-tl-none  font-medium transition-colors"
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
