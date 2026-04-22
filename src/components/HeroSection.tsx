"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export function HeroSection() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: [
        "Growing Businesses.",
        "Small Businesses.",
        "Real Estate Companies.",
        "Restaurants & Hospitality.",
        "Construction Companies.",
        "Healthcare Practices.",
        "Entrepreneurs.",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="w-full bg-white pt-[127px]">
      <div
        className="mx-auto max-w-[1280px] px-10 py-[90px] md:mx-[80px] lg:mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-start md:gap-10">
          {/* Left Column */}
          <div className="max-w-[600px] flex-1">
            <h1
              className="font-montserrat text-[28px] font-[800] leading-[1.2] text-[#2B2C30] md:text-[42px] md:leading-[50.4px]"
            >
              The best bookkeeping services and accounting solutions for{" "}
              <br />
              <span ref={typedRef} className="text-[#38BDF8]" />
            </h1>

            <p
              className="mt-[18px] font-montserrat text-[16px] font-normal leading-[26px] text-[#64748B] md:text-[18px] md:leading-[28.8px]"
            >
              Running a business is hard, your finances shouldn&apos;t be. We
              deliver expert bookkeeping services, tax preparation, and
              accounting consulting to help your business thrive in Miami and across Florida.
            </p>

            <a
              href="#"
              className="mt-[27px] inline-block rounded-lg bg-[#38BDF8] px-[27px] py-[21px] text-[18px] font-semibold text-white shadow-[0px_5px_10px_-2px_rgba(50,50,93,0.26),0px_3px_6px_-3px_rgba(0,0,0,0.3)] transition-all duration-200 hover:translate-y-[-1px] hover:brightness-110"
            >
              Free Consultation
            </a>

            <div className="mt-6">
              <p className="font-montserrat text-[14px] font-normal text-[#64748B]">
                Independently ranked by
              </p>
              <div className="mt-2 flex items-center gap-4">
                <span className="rounded bg-gray-100 px-3 py-1 font-montserrat text-[13px] font-medium text-gray-400 grayscale">
                  Forbes
                </span>
                <span className="rounded bg-gray-100 px-3 py-1 font-montserrat text-[13px] font-medium text-gray-400 grayscale">
                  Investopedia
                </span>
                <span className="rounded bg-gray-100 px-3 py-1 font-montserrat text-[13px] font-medium text-gray-400 grayscale">
                  Entrepreneur
                </span>
              </div>
            </div>

            <p className="mt-4 font-montserrat text-[14px] font-normal text-[#64748B]">
              See{" "}
              <a href="#" className="text-[#4A5E7A] underline">
                where else we&apos;ve been featured
              </a>
              .
            </p>
          </div>

          {/* Right Column */}
          <div className="relative mt-10 hidden h-[450px] w-[500px] flex-shrink-0 md:mt-0 md:block">
            {/* Radial glow background */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(38,151,212,0.35), transparent 70%)",
              }}
            />

            {/* Large 360 text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="select-none font-montserrat text-[120px] font-[800] text-[#4A5E7A] opacity-30">
                360
              </span>
            </div>

            {/* Floating card: Advisor */}
            <div className="absolute left-2 top-6 rounded-xl bg-white p-3 shadow-lg">
              <p className="text-[11px] font-medium text-gray-400">Advisor</p>
              <p className="text-[13px] font-semibold text-[#2B2C30]">
                Sarah M.
              </p>
              <p className="text-[11px] text-gray-400">CFO Specialist</p>
            </div>

            {/* Floating card: Next Availability */}
            <div className="absolute right-4 top-4 rounded-xl bg-white p-3 shadow-lg">
              <p className="text-[11px] font-medium text-gray-400">
                Next Availability
              </p>
              <p className="text-[13px] font-semibold text-[#2B2C30]">
                Today, 2:00 PM
              </p>
            </div>

            {/* Floating card: Payroll Processed */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 rounded-xl bg-white p-3 shadow-lg">
              <p className="text-[11px] font-medium text-green-500">
                Payroll Processed
              </p>
              <p className="text-[13px] font-semibold text-[#2B2C30]">
                $24,500.00
              </p>
              <p className="text-[11px] text-gray-400">12 employees</p>
            </div>

            {/* Floating card: Business Performance */}
            <div className="absolute bottom-8 right-6 rounded-xl bg-white p-3 shadow-lg">
              <p className="text-[11px] font-medium text-gray-400">
                Business Performance
              </p>
              <div className="mt-1 flex items-end gap-1">
                <div className="h-4 w-2 rounded-sm bg-[#4A5E7A] opacity-40" />
                <div className="h-6 w-2 rounded-sm bg-[#4A5E7A] opacity-60" />
                <div className="h-8 w-2 rounded-sm bg-[#4A5E7A] opacity-80" />
                <div className="h-10 w-2 rounded-sm bg-[#4A5E7A]" />
                <div className="h-7 w-2 rounded-sm bg-[#4A5E7A] opacity-70" />
              </div>
            </div>

            {/* Floating card: Taxes Filed */}
            <div className="absolute bottom-4 left-4 rounded-xl bg-white p-3 shadow-lg">
              <p className="text-[11px] font-medium text-green-500">
                Taxes Filed
              </p>
              <p className="text-[13px] font-semibold text-[#2B2C30]">
                Q4 2024
              </p>
              <p className="text-[11px] text-gray-400">On time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
