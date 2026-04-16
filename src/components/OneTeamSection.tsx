import Image from "next/image";
import Link from "next/link";

export function OneTeamSection() {
  return (
    <section className="w-full bg-white">
      <div
        className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 px-6 py-16 md:flex-row md:gap-16 md:px-10 md:py-[90px]"
        style={{ marginInline: "auto" }}
      >
        {/* Image Side (LEFT) */}
        <div className="relative w-full flex-shrink-0 md:w-1/2">
          <Image
            src="/images/photos/man-on-laptop.webp"
            alt="Professional working on a laptop with financial dashboards"
            width={500}
            height={500}
            className="w-full rounded-2xl object-cover"
          />

          {/* Floating overlay cards */}
          <div
            className="absolute top-4 right-4 flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-md"
          >
            <span className="text-xs font-semibold text-[#3C416E]">
              Business Performance Metrics
            </span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2697D4] text-[10px] text-white">
              +
            </span>
          </div>

          <div
            className="absolute bottom-24 left-4 flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-md"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-[10px] text-white">
              &#10003;
            </span>
            <span className="text-xs font-semibold text-[#3C416E]">
              Taxes Filed
            </span>
          </div>

          <div
            className="absolute right-4 bottom-16 flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-md"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FC6A03] text-[10px] text-white">
              &#8593;
            </span>
            <span className="text-xs font-semibold text-[#3C416E]">
              Revenue Up
            </span>
          </div>

          <div
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-2 flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-md"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#767EAD] text-[10px] text-white">
              $
            </span>
            <span className="text-xs font-semibold text-[#3C416E]">
              Cashflow Analyzer
            </span>
          </div>

          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-md"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2697D4] text-[10px] text-white">
              &#10003;
            </span>
            <span className="text-xs font-semibold text-[#3C416E]">
              Payroll Processed
            </span>
          </div>
        </div>

        {/* Text Side (RIGHT) */}
        <div className="w-full md:w-1/2">
          <h2
            className="mb-[18px] font-[Montserrat] text-[28px] font-extrabold leading-tight text-[#3C416E] md:text-[36px]"
          >
            <span className="font-extrabold">One team.</span>
            <br />
            Your complete
            <br />
            <span className="font-extrabold">finance department.</span>
          </h2>
          <p
            className="font-[Montserrat] text-[15px] font-medium leading-[28px] text-[#767EAD] md:text-[17px] md:leading-[30.6px]"
          >
            Your business moves fast -- your finance team should keep up.
            Bookkeeper360 is your one-stop shop for bookkeeping, tax strategy,
            payroll, and Fractional CFO support that scales with you.
          </p>
          <Link
            href="#"
            className="mt-[25px] inline-block rounded-lg bg-[#FC6A03] px-[25px] py-[20px] font-[Montserrat] text-[17px] font-semibold text-white transition-all duration-200 hover:opacity-90"
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.26) 0px 5px 10px -2px, rgba(0, 0, 0, 0.3) 0px 3px 6px -3px",
            }}
          >
            Schedule a Call
          </Link>
        </div>
      </div>
    </section>
  );
}
