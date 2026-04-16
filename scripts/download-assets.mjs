import { mkdir, writeFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, "..", "public");

const assets = [
  // Logos
  ["https://bookkeeper360.com/images/logos/bk360-cloud.svg", "images/logos/bk360-cloud.svg"],
  // Service icons
  ["https://bookkeeper360.com/images/icons/services/bk360-app--circle.svg", "images/icons/services/bk360-app--circle.svg"],
  ["https://bookkeeper360.com/images/icons/services/bookkeeping--circle.svg", "images/icons/services/bookkeeping--circle.svg"],
  ["https://bookkeeper360.com/images/icons/services/cfo-advisory--circle.svg", "images/icons/services/cfo-advisory--circle.svg"],
  ["https://bookkeeper360.com/images/icons/services/payroll-hr--circle.svg", "images/icons/services/payroll-hr--circle.svg"],
  ["https://bookkeeper360.com/images/icons/services/tax--circle.svg", "images/icons/services/tax--circle.svg"],
  ["https://bookkeeper360.com/images/icons/services/back-office-technology--circle.svg", "images/icons/services/back-office-technology--circle.svg"],
  ["https://bookkeeper360.com/images/icons/calendar.svg", "images/icons/calendar.svg"],
  // Third-party logos
  ["https://bookkeeper360.com/images/logos/third-party/gusto--color.svg", "images/logos/third-party/gusto--color.svg"],
  ["https://bookkeeper360.com/images/logos/third-party/quickbooks--color.svg", "images/logos/third-party/quickbooks--color.svg"],
  ["https://bookkeeper360.com/images/logos/third-party/xero--color.svg", "images/logos/third-party/xero--color.svg"],
  ["https://bookkeeper360.com/images/logos/third-party/google--color.svg", "images/logos/third-party/google--color.svg"],
  // Illustrations
  ["https://bookkeeper360.com/images/graphics/illustrations/form-w-2-and-paycheck.svg", "images/graphics/illustrations/form-w-2-and-paycheck.svg"],
  ["https://bookkeeper360.com/images/graphics/illustrations/business-performance-chart.svg", "images/graphics/illustrations/business-performance-chart.svg"],
  ["https://bookkeeper360.com/images/graphics/illustrations/form-1120-s.svg", "images/graphics/illustrations/form-1120-s.svg"],
  ["https://bookkeeper360.com/images/graphics/illustrations/cashflow-chart.svg", "images/graphics/illustrations/cashflow-chart.svg"],
  ["https://bookkeeper360.com/images/graphics/illustrations/bolt-notifications/cash-runway-under-8-months.svg", "images/graphics/illustrations/bolt-notifications/cash-runway-under-8-months.svg"],
  ["https://bookkeeper360.com/images/graphics/illustrations/bolt-notifications/revenue-up.svg", "images/graphics/illustrations/bolt-notifications/revenue-up.svg"],
  ["https://bookkeeper360.com/images/graphics/illustrations/bolt-notifications/quarterly-taxes-estimate.svg", "images/graphics/illustrations/bolt-notifications/quarterly-taxes-estimate.svg"],
  ["https://bookkeeper360.com/images/graphics/illustrations/bolt-notifications/cash-runway-under-15-months.svg", "images/graphics/illustrations/bolt-notifications/cash-runway-under-15-months.svg"],
  // 360 App graphics
  ["https://bookkeeper360.com/images/graphics/360-app/metrics/revenue.svg", "images/graphics/360-app/metrics/revenue.svg"],
  ["https://bookkeeper360.com/images/graphics/360-app/metrics/gross-profit.svg", "images/graphics/360-app/metrics/gross-profit.svg"],
  ["https://bookkeeper360.com/images/graphics/360-app/profit-and-loss.png", "images/graphics/360-app/profit-and-loss.png"],
  ["https://bookkeeper360.com/images/graphics/360-app/mobile-app-phone-mockup.webp", "images/graphics/360-app/mobile-app-phone-mockup.webp"],
  // Photos
  ["https://bookkeeper360.com/images/photos/hailey-ford.jpg", "images/photos/hailey-ford.jpg"],
  ["https://bookkeeper360.com/images/photos/man-on-laptop.webp", "images/photos/man-on-laptop.webp"],
  ["https://bookkeeper360.com/images/photos/woman-with-ipad-smiling.webp", "images/photos/woman-with-ipad-smiling.webp"],
  // Testimonial photos
  ["https://bookkeeper360.com/images/photos/testimonials/rob-howard.png", "images/photos/testimonials/rob-howard.png"],
  ["https://bookkeeper360.com/images/photos/testimonials/virj-kan.png", "images/photos/testimonials/virj-kan.png"],
  ["https://bookkeeper360.com/images/photos/testimonials/tim-mcfadyen.png", "images/photos/testimonials/tim-mcfadyen.png"],
  ["https://bookkeeper360.com/images/photos/testimonials/tameka-brown.png", "images/photos/testimonials/tameka-brown.png"],
  ["https://bookkeeper360.com/images/photos/testimonials/sara-ferrer.png", "images/photos/testimonials/sara-ferrer.png"],
  ["https://bookkeeper360.com/images/photos/testimonials/andy-mcneil.png", "images/photos/testimonials/andy-mcneil.png"],
  // Misc
  ["https://bookkeeper360.com/images/misc/five-stars.svg", "images/misc/five-stars.svg"],
  ["https://bookkeeper360.com/images/misc/google-play.svg", "images/misc/google-play.svg"],
  ["https://bookkeeper360.com/images/misc/ios-app-store.svg", "images/misc/ios-app-store.svg"],
  // Favicons
  ["https://bookkeeper360.com/images/favicon/favicon.ico", "seo/favicon.ico"],
  ["https://bookkeeper360.com/images/meta/apple-touch-icon.png", "seo/apple-touch-icon.png"],
  ["https://bookkeeper360.com/images/meta/apple-touch-icon-180x180.png", "seo/apple-touch-icon-180x180.png"],
  // External CDN
  ["https://uc-cdn.cacheventures.com/8137589e-4a02-4d81-81f2-ed344b130b78/-/resize/160x160/", "images/photos/nick-pasquarosa.jpg"],
  ["https://uc-cdn.cacheventures.com/1df611c4-3326-44fc-80e7-512dab8c9160/-/resize/200x200/", "images/photos/accurate-financials-person.jpg"],
];

async function download(url, dest) {
  const fullPath = join(PUBLIC, dest);
  await mkdir(dirname(fullPath), { recursive: true });
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)" },
    });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(fullPath, buf);
    console.log(`OK ${dest} (${buf.length} bytes)`);
  } catch (e) {
    console.error(`FAIL ${dest}: ${e.message}`);
  }
}

async function main() {
  console.log(`Downloading ${assets.length} assets...`);
  const concurrency = 4;
  for (let i = 0; i < assets.length; i += concurrency) {
    const batch = assets.slice(i, i + concurrency);
    await Promise.all(batch.map(([url, dest]) => download(url, dest)));
  }
  console.log("Done!");
}

main();
