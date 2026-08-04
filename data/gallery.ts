// EDIT ME: replace these entries with new photos/videos any time.
// For type "image": also set width/height (real pixel dimensions) so the
// card sizes correctly before the file loads.
// For type "video": add the file under public/videos/gallery/ and point
// `src` at it; it autoplays muted once its card scrolls into view.

export interface GalleryItem {
  id: string;
  type: "image" | "video";
  src: string;
  width?: number;
  height?: number;
  alt: string;
  /** Short category label shown as a caption overlay on the card. */
  category: string;
}

export const galleryItems: GalleryItem[] = [
  { id: "gallery-1", type: "image", src: "/images/gallery/gallery-1.png", width: 1911, height: 875, alt: "AI-qualified lead workflow (Gmail to Notion)", category: "Automation Workflow" },
  { id: "gallery-2", type: "image", src: "/images/gallery/gallery-2.png", width: 1254, height: 1254, alt: "Brand logo design", category: "Logo Design" },
  { id: "gallery-3", type: "image", src: "/images/gallery/gallery-3.png", width: 1907, height: 832, alt: "Salon booking website design", category: "Web Design" },
  { id: "gallery-4", type: "image", src: "/images/gallery/gallery-4.png", width: 1024, height: 1536, alt: "AI-generated product ad", category: "Branding Project" },
  { id: "gallery-5", type: "image", src: "/images/gallery/gallery-5.png", width: 1911, height: 821, alt: "Automated Google Sheets data pipeline", category: "Automation Workflow" },
  { id: "gallery-6", type: "video", src: "/videos/gallery/gallery-6.mp4", alt: "Automation workflow demo recording", category: "Automation Workflow" },
  { id: "gallery-7", type: "video", src: "/videos/gallery/gallery-7.mp4", alt: "AI-generated stock chart animation", category: "Automation Workflow" },
  { id: "gallery-8", type: "image", src: "/images/gallery/gallery-8.png", width: 1917, height: 847, alt: "AI lead-qualification system", category: "Automation Workflow" },
  { id: "gallery-9", type: "image", src: "/images/gallery/gallery-9.jpg", width: 1024, height: 1024, alt: "AI-generated video thumbnail", category: "AI Image Generation" },
  { id: "gallery-10", type: "video", src: "/videos/gallery/gallery-10.mp4", alt: "Cinematic AI-generated promotional video for an ebook", category: "Automation Workflow" },
  { id: "gallery-11", type: "image", src: "/images/gallery/gallery-11.png", width: 1902, height: 913, alt: "Habit-tracker web app UI", category: "Web Development" },
];
