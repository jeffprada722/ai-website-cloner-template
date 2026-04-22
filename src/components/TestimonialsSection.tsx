import Image from "next/image";

interface Testimonial {
  readonly name: string;
  readonly company: string;
  readonly quote: string;
  readonly avatar: string;
}

const testimonials: readonly Testimonial[] = [
  {
    name: "Carlos Menendez",
    company: "La Palma Restaurant Group, Miami FL",
    quote:
      "Great team -- diligent and fast! Switched to them after our previous bookkeeper retired, and I have been thrilled with the results ever since.",
    avatar: "rob-howard.png",
  },
  {
    name: "Jennifer Walsh",
    company: "Walsh Realty Group, Coral Gables FL",
    quote:
      "Finally -- reliable, competent, and efficient accountants! The team at Bookkeeping and Accounting Consultants is responsive, knowledgeable, and truly understands real estate businesses.",
    avatar: "virj-kan.png",
  },
  {
    name: "Andre Moreau",
    company: "Moreau Construction LLC, Hialeah FL",
    quote:
      "They saved us over $8,000 last tax season alone. As a construction company owner I needed someone I could trust completely -- BAC has delivered flawlessly.",
    avatar: "tim-mcfadyen.png",
  },
  {
    name: "Luisa Castellanos",
    company: "Castellanos Medical Group, Doral FL",
    quote:
      "Our experience with Bookkeeping and Accounting Consultants has been extraordinary -- their attention to detail and expertise give our practice complete peace of mind.",
    avatar: "tameka-brown.png",
  },
  {
    name: "Sofia Delgado",
    company: "Delgado E-Commerce LLC, Miami FL",
    quote:
      "Bookkeeping and Accounting Consultants has made managing my online business so much easier -- communicative, personable, and great at problem-solving!",
    avatar: "sara-ferrer.png",
  },
  {
    name: "Marco Rivera",
    company: "Rivera Hospitality Group, Miami Beach FL",
    quote:
      "Switching to Bookkeeping and Accounting Consultants was the best decision for our restaurants -- knowledgeable, responsive, and top-notch service. Highly recommend!",
    avatar: "andy-mcneil.png",
  },
] as const;

function TestimonialCard({ testimonial }: { readonly testimonial: Testimonial }) {
  return (
    <div
      className="flex flex-col justify-between rounded-2xl border border-[#E7E7F4] bg-white p-6"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <p
        className="mb-6 text-[15px] leading-6 text-[#2B2C30]"
        style={{ fontWeight: 400 }}
      >
        {testimonial.quote}
      </p>
      <div className="flex items-center gap-3">
        <Image
          src={`/images/photos/testimonials/${testimonial.avatar}`}
          alt={testimonial.name}
          width={48}
          height={48}
          className="size-12 rounded-full object-cover"
        />
        <div>
          <p
            className="text-sm text-[#2B2C30]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
          >
            {testimonial.name}
          </p>
          <p
            className="text-xs text-[#64748B]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
          >
            {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1280px] px-10 py-[90px] max-sm:px-5 max-sm:py-12 lg:mx-20">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          {/* Left: rating */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/misc/five-stars.svg"
              alt="5 stars"
              width={120}
              height={24}
              className="h-6 w-[120px]"
            />
            <span
              className="text-base text-[#2B2C30]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
            >
              4.8 / 5
            </span>
            <span
              className="text-sm text-[#64748B]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
            >
              200+ reviews
            </span>
          </div>

          {/* Right: Heading */}
          <h2
            className="max-w-[448px] text-4xl leading-[43.2px] text-[#2B2C30] max-sm:text-2xl max-sm:leading-8"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
          >
            Check out what our customers are saying
          </h2>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={index >= 3 ? "max-sm:hidden" : ""}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
