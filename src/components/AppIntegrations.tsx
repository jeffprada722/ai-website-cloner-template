"use client";

interface Integration {
  readonly name: string;
  readonly slug: string;
  readonly color: string;
}

const integrations: readonly Integration[] = [
  { name: "QuickBooks", slug: "quickbooks", color: "2CA01C" },
  { name: "Shopify", slug: "shopify", color: "96BF48" },
  { name: "Stripe", slug: "stripe", color: "635BFF" },
  { name: "Amazon", slug: "amazon", color: "FF9900" },
  { name: "Square", slug: "square", color: "3E4348" },
  { name: "Gusto", slug: "gusto", color: "F45D48" },
  { name: "ADP", slug: "adp", color: "D9262C" },
  { name: "Xero", slug: "xero", color: "13B5EA" },
  { name: "FreshBooks", slug: "freshbooks", color: "1DA462" },
] as const;

const duplicated = [...integrations, ...integrations, ...integrations];

export function AppIntegrations() {
  return (
    <section className="w-full overflow-hidden bg-[#F7F9FF] py-10">
      <div className="mb-8 px-10 text-center">
        <h3
          className="text-xl leading-[28.8px] text-[#2B2C30]"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
        >
          We work with tons of apps... Here are a few!
        </h3>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex items-center gap-16"
          style={{
            animation: "marquee 28s linear infinite",
            width: "max-content",
          }}
        >
          {duplicated.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="flex shrink-0 flex-col items-center gap-2 opacity-80 transition-all duration-300 hover:opacity-100"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://cdn.simpleicons.org/${item.slug}/${item.color}`}
                alt={item.name}
                style={{ height: "28px", width: "auto" }}
              />
              <span
                className="text-[10px] text-[#64748B]"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
