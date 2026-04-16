import Image from "next/image";
import Link from "next/link";

export function AccurateFinancialsSection() {
  return (
    <section className="w-full bg-white">
      <div
        className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 px-6 py-16 md:flex-row md:gap-16 md:px-10 md:py-[90px]"
      >
        {/* Dashboard Mockup (LEFT) */}
        <div className="relative w-full flex-shrink-0 md:w-1/2">
          <div className="relative mx-auto w-full max-w-[500px]">
            {/* Revenue chart */}
            <Image
              src="/images/graphics/360-app/metrics/revenue.svg"
              alt="Revenue chart showing growth trends"
              width={460}
              height={200}
              className="w-full rounded-xl shadow-sm"
            />

            {/* Gross Profit chart */}
            <Image
              src="/images/graphics/360-app/metrics/gross-profit.svg"
              alt="Gross profit metrics chart"
              width={460}
              height={200}
              className="mt-4 w-full rounded-xl shadow-sm"
            />

            {/* Person photo circle */}
            <div className="absolute -bottom-4 -left-4 h-[120px] w-[120px] overflow-hidden rounded-full border-4 border-white shadow-lg">
              <Image
                src="/images/photos/accurate-financials-person.jpg"
                alt="Financial professional"
                width={120}
                height={120}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Revenue Up floating badge */}
            <div
              className="absolute -right-2 bottom-12 flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-md"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-[10px] text-white">
                &#8593;
              </span>
              <span className="text-xs font-semibold text-[#3C416E]">
                Revenue Up
              </span>
            </div>
          </div>
        </div>

        {/* Text Side (RIGHT) */}
        <div className="w-full md:w-1/2">
          <h2
            className="mb-[18px] font-[Montserrat] text-[28px] font-extrabold leading-tight text-[#3C416E] md:text-[36px]"
          >
            Accurate and timely{" "}
            <span className="font-extrabold italic">financials</span> built for
            the way you do business.
          </h2>
          <p
            className="font-[Montserrat] text-[15px] font-medium leading-[28px] text-[#767EAD] md:text-[17px] md:leading-[30.6px]"
          >
            Get reliable reports from expert bookkeepers -- delivered on time,
            every month. So you can make smarter, faster decisions with total
            confidence.
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
