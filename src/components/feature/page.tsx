"use client";
import React from "react";
import TestimonialsWeb from "./testimonialsWeb";
import InsightWeb from "./insightWeb";

const Feature = () => {
  return (
    <>
      <section className="hidden bg-[url('/images/features/noktalar.jpg')] bg-no-repeat bg-cover lg:flex flex-col items-center justify-center min-h-screen bg-[#f8f9fd] relative px-10">
        <div className="hidden lg:flex min-h-screen items-center justify-center p-8">
          <div className="max-w-6xl w-full">
            <div className="grid grid-cols-2 gap-16 items-center">
              {/* Left side - Text and Button */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    and discover
                    <br />
                    moooooore features
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Possimus cicuta non depromo
                    <br />
                    tamquam cornu abbas unus cinis
                    <br />
                    verbum tamdiu damnatio.
                  </p>
                </div>
                <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors">
                  More Feature
                </button>
              </div>

              {/* Right side - Feature Cards Grid */}
              <div className="space-y-4">
                {/* Top row - 2 cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-2xl p-6 bg-white">
                    <div className="space-y-4">
                      <div className="w-8 h-8">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="w-full h-full text-gray-700"
                        >
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                          <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
                          <line x1="12" y1="22.08" x2="12" y2="12" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Suspendisse
                        </h3>
                        <p className="text-gray-600 text-sm">mattis non leo</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-2xl p-6 bg-white">
                    <div className="space-y-4">
                      <div className="w-8 h-8">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="w-full h-full text-gray-700"
                        >
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                          <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
                          <line x1="12" y1="22.08" x2="12" y2="12" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Suspendisse
                        </h3>
                        <p className="text-gray-600 text-sm">mattis non leo</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom row - 3 cards */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="border border-gray-200 rounded-2xl p-6 bg-white">
                    <div className="space-y-4">
                      <div className="w-8 h-8">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="w-full h-full text-gray-700"
                        >
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                          <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
                          <line x1="12" y1="22.08" x2="12" y2="12" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Suspendisse
                        </h3>
                        <p className="text-gray-600 text-sm">mattis non leo</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-2xl p-6 bg-white">
                    <div className="space-y-4">
                      <div className="w-8 h-8">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="w-full h-full text-gray-700"
                        >
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                          <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
                          <line x1="12" y1="22.08" x2="12" y2="12" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Suspendisse
                        </h3>
                        <p className="text-gray-600 text-sm">mattis non leo</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-2xl p-6 bg-white">
                    <div className="space-y-4">
                      <div className="w-8 h-8">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="w-full h-full text-gray-700"
                        >
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                          <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
                          <line x1="12" y1="22.08" x2="12" y2="12" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Suspendisse
                        </h3>
                        <p className="text-gray-600 text-sm">mattis non leo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blue decorative lines at bottom - left and right */}
            <div className="mt-16 flex justify-between">
              <div className="w-80 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
              <div className="w-80 h-1 bg-gradient-to-l from-blue-500 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
        <div>
          <TestimonialsWeb />
        </div>
      </section>
      <div className="bg-transparent">
        <InsightWeb/>
      </div>
    </>
  );
};

export default Feature;
