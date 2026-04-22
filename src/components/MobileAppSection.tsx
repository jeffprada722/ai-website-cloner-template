import Image from "next/image";

export function MobileAppSection() {
  return (
    <section className="w-full bg-white pb-[60px]">
      <div
        className="mx-auto max-w-[1280px] flex flex-col lg:flex-row items-center gap-12 px-10 py-[90px]"
        style={{ margin: "0 80px" }}
      >
        {/* Phone mockup with floating cards */}
        <div className="relative w-full lg:w-[400px] flex-shrink-0">
          <Image
            src="/images/graphics/360-app/mobile-app-phone-mockup.webp"
            alt="Bookkeeping and Accounting Consultants mobile app"
            width={300}
            height={600}
            className="mx-auto h-auto"
          />

          {/* "Your tax return was filed" notification - top right */}
          <div className="absolute top-8 right-0 flex items-center gap-2 rounded-lg bg-white p-2 shadow-md">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3 4.7L6.5 11.5L2.7 7.7"
                  stroke="#22C55E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-[12px] font-medium text-[#2B2C30] whitespace-nowrap">
              Your tax return was filed
            </span>
          </div>

          {/* "Cash Runway" notification - bottom left */}
          <div className="absolute bottom-16 left-0 flex items-center gap-2 rounded-lg bg-white p-2 shadow-md">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 12L6 8L9 11L14 4"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-[12px] font-medium text-[#2B2C30] whitespace-nowrap">
              Cash Runway
            </span>
          </div>

          {/* "Taxes Filed" card - bottom right */}
          <div className="absolute bottom-4 right-0 flex items-center gap-2 rounded-lg bg-white p-2 shadow-md">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="2" width="10" height="12" rx="1" stroke="#38BDF8" strokeWidth="1.5" />
                <path d="M6 6H10M6 9H8" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-[12px] font-medium text-[#2B2C30] whitespace-nowrap">
              Taxes Filed
            </span>
          </div>
        </div>

        {/* Text content */}
        <div className="max-w-[640px]">
          <h2
            className="mb-[18px] font-[Montserrat] text-[36px] font-[800] leading-[43.2px]"
          >
            <span className="text-[#38BDF8]">Bookkeeping and Accounting Consultants</span>{" "}
            <span className="text-[#2B2C30]">in your back pocket.</span>
          </h2>

          <p className="font-[Montserrat] text-[17px] font-medium leading-[30.6px] text-[#767EAD]">
            Our new mobile app gives you real-time financial visibility and direct
            access to your team wherever you are. Download today on iOS and Android
            and take your business with you.
          </p>

          {/* App store badges */}
          <div className="mt-6 flex items-center gap-3">
            <a href="#" aria-label="Get it on Google Play">
              <Image
                src="/images/misc/google-play.svg"
                alt="Google Play"
                width={135}
                height={40}
                className="h-10 w-auto"
              />
            </a>
            <a href="#" aria-label="Download on the App Store">
              <Image
                src="/images/misc/ios-app-store.svg"
                alt="App Store"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
