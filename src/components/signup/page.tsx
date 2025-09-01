"use client";
import { useRef, useState } from "react";


const FORM_ACTION = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf15x8Xc8RefIRhfKkKTLlggVUssu8vIDRikWJk05NDaFFFXQ/formResponse"

const ENTRY_ID = "emailAddress";

export default function SignupCard() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");
  const submittedRef = useRef(false);

  function onSubmit() {
    if (!email) return;
    setStatus("loading");
    setMsg("");
    submittedRef.current = true; 
  }

  function onIframeLoad() {
    if (submittedRef.current) {
      setStatus("ok");
      setMsg("🎉 Subscribed! Check the latest updates soon.");
      setEmail("");
      submittedRef.current = false;
    }
  }

  return (
    <div className="flex items-center justify-center px-4 lg:mb-60">
     
      <iframe name="gform-target" className="hidden" onLoad={onIframeLoad} />

      <form
        action={FORM_ACTION}
        method="POST"
        target="gform-target"
        onSubmit={onSubmit}
      >
        <div className="w-[361px] relative h-[370px] lg:w-[1224px] lg:h-[257px] mb-[100px] lg:mb-0 2xl:h-[255px] rounded-[30px] bg-[#065AF1] lg:bg-transparent lg:bg-[url('/icons/signup/bg.svg')]  lg:bg-no-repeat lg:bg-cover  flex flex-col">
          <div className="flex-1 w-full flex flex-col lg:flex-row justify-center px-1 lg:justify-evenly  lg:items-center">
            <h2 className="text-white text-3xl font-normal text-center lg:text-left mb-[30px] lg:mb-0 leading-[1.3]">
              Join our newsletter <br className="hidden lg:block" /> for new features!
            </h2>

            <div className="space-y-5 lg:space-y-0 flex flex-col lg:flex-row justify-center items-center">
            
              <input type="text" name="company" className="hidden" tabIndex={-1} aria-hidden="true" />

              <input
                type="email"
                name={ENTRY_ID}     
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-[329px] 2xl:w-[392px] h-14 lg:h-[70px] rounded-[10px] lg:rounded-br-none lg:rounded-tr-none bg-white border-none text-black placeholder:text-black/40 font-inter text-base leading-[1.36] pl-5 focus:outline-none"
              />

              <button
                className="w-[329px] cursor-pointer lg:w-[104px] h-14 lg:h-[70px]  bg-black hover:bg-black/60 text-white rounded-[10px] lg:rounded-bl-none lg:rounded-tl-none  font-medium transition-colors"
                type="submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? "…" : "Join"}
              </button>

    
            </div>
          </div>
          <span className="text-sm absolute lg:bottom-10 bottom-5 left-5 lg:left-[50%] lg:translate-x-[-50%] ">
                {status === "ok" && msg}
                {status === "err" && "Oops, something went wrong. Try again?"}
              </span>
        </div>
      </form>
    </div>
  );
}

