export function TopBanner() {
  return (
    <div
      className="fixed top-0 z-10 w-full"
      style={{
        background:
          "linear-gradient(to right, rgb(43,44,48), rgb(74,94,122), rgb(43,44,48))",
      }}
    >
      <div
        className="flex items-center justify-center text-white"
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          padding: "14px 16px",
        }}
      >
        <span>
          {"🚨 Bundle Bookkeeping + Tax to Save — "}
          <a
            href="#"
            className="underline"
            style={{ fontWeight: 700 }}
          >
            Book a Call
          </a>
          {" 🚨"}
        </span>
      </div>
    </div>
  );
}
