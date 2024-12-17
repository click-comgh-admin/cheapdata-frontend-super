export const WEBSITE_HOST_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://akwaaba-africa-1.web.app/";

export default function sitemap() {
  const changeFrequency = "daily";

  const routes = [""].map((route) => ({
    url: `${WEBSITE_HOST_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
  }));

  return [...routes];
}
