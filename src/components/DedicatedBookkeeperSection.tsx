import Link from "next/link";

export function DedicatedBookkeeperSection() {
  return (
    <section className="w-full bg-white">
      <div
        className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 px-6 py-16 md:flex-row md:gap-16 md:px-10 md:py-[90px]"
      >
        {/* Text Side (LEFT) */}
        <div className="w-full md:w-1/2">
          <h2
            className="mb-[18px] font-[Montserrat] text-[28px] font-extrabold leading-tight text-[#3C416E] md:text-[36px]"
          >
            Chat, call, or email{" "}
            <span
              className="underline decoration-[#FC6A03] decoration-[3px] underline-offset-4"
            >
              your
            </span>{" "}
            dedicated bookkeeper.
          </h2>
          <p
            className="font-[Montserrat] text-[15px] font-medium leading-[28px] text-[#767EAD] md:text-[17px] md:leading-[30.6px]"
          >
            At Bookkeeper360, you&apos;re matched with a dedicated expert who
            truly understands your business -- not just your books. Backed by a
            team of experienced business bookkeepers, your dedicated bookkeeper
            is always just a message away -- ready to provide real-time insights,
            strategic advice, or quick answers to help you grow with confidence.
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

        {/* Chat Mockup (RIGHT) */}
        <div className="w-full md:w-1/2">
          <div className="mx-auto max-w-[400px] rounded-2xl bg-[#F7F9FF] p-6">
            {/* Chat bubble 1: from bookkeeper */}
            <div className="mb-4 flex items-start gap-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#2697D4] text-[10px] font-bold text-white">
                BK
              </div>
              <div className="rounded-xl bg-white p-3 shadow-sm">
                <p className="font-[Montserrat] text-[13px] leading-[20px] text-[#3C416E]">
                  Hey your books are closed for last month! Let&apos;s schedule a
                  quick call to review the results together.
                </p>
              </div>
            </div>

            {/* Chat bubble 2: from user (right-aligned) */}
            <div className="mb-4 flex justify-end">
              <div className="rounded-xl bg-[#2697D4] p-3">
                <p className="font-[Montserrat] text-[13px] leading-[20px] text-white">
                  Yes, can we speak tomorrow at 3 PM?
                </p>
              </div>
            </div>

            {/* Chat bubble 3: from bookkeeper */}
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#2697D4] text-[10px] font-bold text-white">
                BK
              </div>
              <div className="rounded-xl bg-white p-3 shadow-sm">
                <p className="font-[Montserrat] text-[13px] leading-[20px] text-[#3C416E]">
                  Perfect, I&apos;ll send over a calendar invite now.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
