export function FooterCTA() {
  return (
    <div className="mx-auto max-w-[1280px] px-10 py-12">
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:items-center">
        {/* Left: heading + phone */}
        <div className="text-center md:text-left">
          <p className="font-[Montserrat] text-[24px] font-bold text-white">
            Ready to get started?
          </p>
          <a
            href="tel:516-200-4793"
            className="font-[Montserrat] text-[32px] font-[800] text-white hover:underline"
          >
            (516) 200-4793
          </a>
        </div>

        {/* Right: CTA button */}
        <a
          href="#"
          className="inline-block rounded-lg bg-[#FC6A03] px-8 py-5 font-[Montserrat] text-[17px] font-semibold text-white shadow-lg transition-opacity hover:opacity-90"
        >
          Free Consultation
        </a>
      </div>
    </div>
  );
}
