const integrationLogos: readonly string[] = [
  "QuickBooks",
  "ADP",
  "gusto",
  "Square",
  "bill.com",
  "amazon",
  "Shopify",
  "stripe",
  "a2x",
  "ramp",
  "bluevine",
] as const;

export function AppIntegrations() {
  return (
    <section className="w-full bg-[#F7F9FF]">
      <div className="mx-auto max-w-[1280px] px-10 py-[72px] text-center max-sm:px-5 max-sm:py-10 lg:mx-20">
        {/* Heading */}
        <h3
          className="mb-[72px] text-2xl leading-[28.8px] text-[#3C416E] max-sm:mb-10 max-sm:text-xl"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
        >
          We work with tons of apps... Here are a few!
        </h3>

        {/* Logo grid */}
        <div className="flex flex-wrap items-center justify-center gap-12 grayscale max-sm:gap-6">
          {integrationLogos.map((name) => (
            <span
              key={name}
              className="text-xl text-[#8178B0] opacity-70 max-sm:text-base"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
