import Image from "next/image";
import Link from "next/link";

export function SmarterTechSection() {
  return (
    <section className="w-full bg-white">
      <div
        className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 px-6 py-16 md:flex-row md:gap-16 md:px-10 md:py-[90px]"
      >
        {/* Text Side (LEFT) */}
        <div className="w-full md:w-1/2">
          <h2
            className="mb-[18px] font-[Montserrat] text-[28px] font-extrabold leading-tight text-[#2B2C30] md:text-[36px]"
          >
            Smarter Tech.
            <br />
            Real Insights.
            <br />
            Your Business, in Sync.
          </h2>
          <p
            className="font-[Montserrat] text-[15px] font-medium leading-[28px] text-[#767EAD] md:text-[17px] md:leading-[30.6px]"
          >
            Our software offers performance dashboards, messaging tools, and
            AI-powered insights -- giving you the cash flow visibility and
            communication you need to run your business like a modern CFO.
          </p>
          <Link
            href="#"
            className="mt-[25px] inline-block rounded-lg bg-[#38BDF8] px-[25px] py-[20px] font-[Montserrat] text-[17px] font-semibold text-white transition-all duration-200 hover:opacity-90"
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.26) 0px 5px 10px -2px, rgba(0, 0, 0, 0.3) 0px 3px 6px -3px",
            }}
          >
            Schedule a Call
          </Link>
        </div>

        {/* App Screenshots (RIGHT) */}
        <div className="relative w-full md:w-1/2">
          <Image
            src="/images/graphics/360-app/profit-and-loss.png"
            alt="Bookkeeping and Accounting Consultants app profit and loss dashboard"
            width={500}
            height={400}
            className="w-full rounded-xl shadow-lg"
          />

          {/* Floating notification card overlay */}
          <div
            className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-md"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4A5E7A] text-[10px] text-white">
              &#9733;
            </span>
            <span className="text-xs font-semibold text-[#2B2C30]">
              AI Insights Ready
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
