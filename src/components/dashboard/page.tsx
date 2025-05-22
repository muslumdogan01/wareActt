'use client'
import Image from "next/image";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <div
        className="w-full hidden lg:flex justify-center items-baseline relative dashboard-wrapper"
        style={{
          marginTop: "clamp(100px, 4vw, 550px)",
        }}
      >
        <section className="flex justify-center items-center relative z-50">
          <div className="w-full max-w-[1016px] relative">
            {/* Sol üst süs */}
            <div className="absolute top-[-10px] left-[-105px]">
              <Image
                src="/icons/content/dots.svg"
                width={250}
                height={75}
                alt="dots"
              />
            </div>

            {/* Ana resim */}
    <div>
              <Image
              src="/images/content/dashboard.png"
              alt="Dashboard preview"
              width={1500}
              height={874}
              className="w-full h-auto object-contain"
            />
    </div>

            {/* Sağ alt süs */}
            <div className="absolute bottom-5 right-0 xl:right-[-105px]">
              <Image
                src="/icons/content/rightDots.svg"
                width={250}
                height={75}
                alt="dots"
                className="h-auto"
              />
            </div>
          </div>
        </section>
      </div>

      {/* 💡 Media query’ler burada */}
      <style jsx>{`
        @media (min-width: 1920px) {
          .dashboard-wrapper {
            margin-top: clamp(100px, 4vw, 530px) !important;
          }
        }

        @media (min-width: 2400px) {
          .dashboard-wrapper {
             margin-top: clamp(100px, 4vw, 530px) !important;
          }
        }

        @media (min-width: 3000px) {
          .dashboard-wrapper {
             margin-top: clamp(130px, 4vw, 550px) !important;
          }
        }
        @media (min-width: 4000px) {
          .dashboard-wrapper {
             margin-top: clamp(140px, 5vw, 550px) !important;
          }
        }
      `}</style>
    </>
  );
};

export default Dashboard;
