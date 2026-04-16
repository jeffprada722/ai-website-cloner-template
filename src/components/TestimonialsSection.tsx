import Image from "next/image";

interface Testimonial {
  readonly name: string;
  readonly company: string;
  readonly quote: string;
  readonly avatar: string;
}

const testimonials: readonly Testimonial[] = [
  {
    name: "Rob Howard",
    company: "Howard Development & Consulting, LLC & Innovating with AI,LLC",
    quote:
      "Great team - diligent and fast! Switched to them after another bookkeeper burned out, and I have been thrilled with the results!",
    avatar: "rob-howard.png",
  },
  {
    name: "Virj Kan",
    company: "Primitives Biodesign",
    quote:
      "Finally--reliable, competent, and efficient CPAs and bookkeepers! The team at Bookkeeper360 is responsive, knowledgeable, and truly understands startups at any stage.",
    avatar: "virj-kan.png",
  },
  {
    name: "Tim Mcfadyen",
    company: "Thats so Fetch, LLC & Thats So Fetch Pty Ltd",
    quote:
      "As a founder based outside the U.S., I needed a trustworthy accountant to handle everything on time with complete accuracy. Bookkeeper360 has delivered flawlessly--highly recommended!",
    avatar: "tim-mcfadyen.png",
  },
  {
    name: "Tameka Brown",
    company: "LINC, Inc",
    quote:
      "Our experience with Bookkeeper360 has been extraordinary--their attention to detail and expertise give us complete peace of mind. Highly recommend!",
    avatar: "tameka-brown.png",
  },
  {
    name: "Sara Ferrer",
    company: "Zoey Koko LLC",
    quote:
      "Bookkeeper360 has made managing my small business so much easier--they're communicative, personable, and great at problem-solving!",
    avatar: "sara-ferrer.png",
  },
  {
    name: "Andy McNeil",
    company: "Filmless, Inc",
    quote:
      "Switching to Bookkeeper360 was the best decision for our business--they're knowledgeable, responsive, and provide top-notch bookkeeping and tax services. Highly recommend!",
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
        className="mb-6 text-[15px] leading-6 text-[#3C416E]"
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
            className="text-sm text-[#3C416E]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
          >
            {testimonial.name}
          </p>
          <p
            className="text-xs text-[#8178B0]"
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
          {/* Left: Google rating */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logos/third-party/google--color.svg"
              alt="Google"
              width={40}
              height={40}
              className="size-10"
            />
            <Image
              src="/images/misc/five-stars.svg"
              alt="5 stars"
              width={120}
              height={24}
              className="h-6 w-[120px]"
            />
            <span
              className="text-base text-[#3C416E]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
            >
              4.8 / 5
            </span>
            <span
              className="text-sm text-[#8178B0]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
            >
              200+ reviews
            </span>
          </div>

          {/* Right: Heading */}
          <h2
            className="max-w-[448px] text-4xl leading-[43.2px] text-[#3C416E] max-sm:text-2xl max-sm:leading-8"
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
