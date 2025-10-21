"use client";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget?: (opts: { url: string }) => void;
    };
  }
}

export default function BookDemoButton() {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    // CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);

    // Script
    const s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  const openPopup = () => {
    if (window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/mustafagerdan/wareact-demo-meeting",
      });
    } else {
      window.open("https://calendly.com/mustafagerdan/wareact-demo-meeting", "_blank");
    }
  };

  return (
    <button
      onClick={openPopup}
      className="xl:w-[151px] w-[121px] xl:h-[40px] h-[30px] rounded-[100px] font-semibold text-[14px] leading-[1.4] transition-all duration-300 ease-in-out hover:bg-[#065AF1] hover:text-white text-[#065AF1] border-[#065AF1] cursor-pointer border-[1px]"
    >
      Book a Demo
    </button>
  );
}
