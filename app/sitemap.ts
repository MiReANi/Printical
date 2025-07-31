  import { MetadataRoute } from "next";
   
  export default function sitemap(): MetadataRoute.Sitemap {
    return [
      {
        url: "https://printical.fi",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1
      },
      {
        url: "https://printical.fi/information",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9
      },
      {
        url: "https://printical.fi/contact",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9
      }
      // other pages
    ]; 
  }