// EDIT ME: short/long copy below is placeholder starter content — rewrite in
// your own voice. `icon` must match a key mapped in ServicesOverview.tsx and
// ServiceCard.tsx. `media.kind` controls which placeholder label
// MediaPlaceholder shows on the /services page.

export interface Service {
  id: string;
  title: string;
  /** Short blurb for the homepage overview card. */
  shortDescription: string;
  /** 2-3 sentence body copy for the /services card, benefit first. */
  longDescription: string;
  icon:
    | "ImageIcon"
    | "Video"
    | "Type"
    | "Bot"
    | "MessageSquare"
    | "Sparkles"
    | "FileText"
    | "Terminal"
    | "Globe"
    | "Workflow";
  media: {
    kind: "image" | "video" | "image-or-video";
    /** Real asset path under public/. Omit to keep showing the upload placeholder. */
    src?: string;
    /** Required alongside an image src, for correct aspect ratio sizing. */
    width?: number;
    height?: number;
    /** Video only: autoplay muted and looping instead of waiting for a click. */
    autoPlay?: boolean;
    /** Video only: still frame shown until the card scrolls into view and the video loads. */
    poster?: string;
  };
  /** "service" = a purchasable deliverable; "tool" = part of the toolkit, not sold directly. */
  category: "service" | "tool";
  /** Short scannable outcome line, services only. */
  result?: string;
  /** Pricing signal shown on the card, services only. */
  price?: string;
  /** Optional live-site links shown as headed groups on the /services card. */
  linkGroups?: { heading: string; links: { label: string; href: string }[] }[];
}

export const services: Service[] = [
  {
    id: "ai-image-generation",
    title: "AI Image Generation",
    shortDescription: "Custom AI-generated imagery tailored to your brand.",
    longDescription:
      "Get original product mockups, hero art, and social graphics without a traditional photo shoot. I use tools like Midjourney, DALL·E, Adobe Firefly, and Leonardo AI, directing each prompt's subject, lighting, and style so the result looks professional and on-brand from the first few tries.",
    icon: "ImageIcon",
    media: { kind: "image", src: "/images/services/ai-image-generation.jpg", width: 1024, height: 1024 },
    category: "service",
    result: "Result: launch-ready visuals in 48 hours.",
    price: "Custom quote",
  },
  {
    id: "ai-video-generation",
    title: "AI Video Generation",
    shortDescription: "Short-form AI-generated video for marketing and social.",
    longDescription:
      "Get a polished short promo, social, or explainer video without a film crew. I generate the clip with tools like Runway, Pika, and Sora, then edit it in CapCut or Premiere, trimming scenes and adding captions and music, so it's ready to publish.",
    icon: "Video",
    media: {
      kind: "video",
      src: "/videos/services/ai-video-generation.mp4",
      poster: "/videos/services/ai-video-generation-poster.jpg",
    },
    category: "service",
    result: "Result: a publish-ready clip in a few days, not weeks.",
    price: "Custom quote",
  },
  {
    id: "logo-text-design",
    title: "Logo & Text Design",
    shortDescription: "AI-assisted logo, wordmark, and typographic design.",
    longDescription:
      "Get a custom logo, wordmark, or type treatment that doesn't feel generic. I brainstorm names and direction in ChatGPT, build the mark in an AI logo tool like Canva or Looka, then hand-finish the result so it's genuinely yours.",
    icon: "Type",
    media: { kind: "image", src: "/images/services/logo-text-design.jpg", width: 1024, height: 1024 },
    category: "service",
    result: "Result: a finished brand mark in days, ready to use everywhere.",
    price: "Custom quote",
  },
  {
    id: "claude-ai-assistant",
    title: "Claude (AI Assistant Work)",
    shortDescription: "Content writing, research, and workflows built with Claude.",
    longDescription:
      "Claude can generate and refine visuals directly from a prompt, and connect to apps you already use, like Google Docs, PDFs, or Canva, to build inside them for you. It can also take a task and a deadline and carry the work out on its own, the same way I set up hands-off automation with n8n.",
    icon: "Bot",
    media: {
      kind: "image-or-video",
      src: "/videos/services/claude-ai-assistant.mp4",
      autoPlay: true,
      poster: "/videos/services/claude-ai-assistant-poster.jpg",
    },
    category: "tool",
  },
  {
    id: "chatgpt",
    title: "ChatGPT",
    shortDescription: "One of the AI tools in my day-to-day toolkit.",
    longDescription:
      "ChatGPT helps me generate ideas and write strong prompts quickly. Custom GPTs let me build a focused version for one job, like producing business cards or logo starting points on demand. It's a workflow I can also package up and sell access to.",
    icon: "MessageSquare",
    media: { kind: "image", src: "/images/services/chatgpt.png", width: 1408, height: 768 },
    category: "tool",
  },
  {
    id: "gemini",
    title: "Gemini",
    shortDescription: "Another AI tool I use across research and content tasks.",
    longDescription:
      "Gemini covers image, video, and everyday search in one place. Nano Banana Pro handles image creation, Veo handles video and creative ideation, and Gemini is now built directly into Google Search for quick answers on the go.",
    icon: "Sparkles",
    media: { kind: "image", src: "/images/services/gemini.png", width: 1408, height: 768 },
    category: "tool",
  },
  {
    id: "ai-content-writing",
    title: "AI Content Writing",
    shortDescription: "Website copy, blog posts, and marketing content, AI-assisted.",
    longDescription:
      "Get website copy, blog posts, social captions, newsletters, or product descriptions written fast without sounding generic. Every piece starts as an AI draft, then gets a hand edit for voice, accuracy, and clarity before it ships.",
    icon: "FileText",
    media: { kind: "image", src: "/images/services/ai-content-writing.png", width: 1408, height: 768 },
    category: "service",
    result: "Result: a full first draft back in hours, not days.",
    price: "Custom quote",
  },
  {
    id: "claude-code",
    title: "Claude Code",
    shortDescription: "AI-assisted software development for real, shippable code.",
    longDescription:
      "Claude Code generates real, working code for almost any website. I open it inside VS Code, describe the site clearly, and it writes the code directly, turning a prompt into a working site faster than building it line by line.",
    icon: "Terminal",
    media: { kind: "image-or-video", src: "/images/services/claude-code.png", width: 1001, height: 671 },
    category: "tool",
  },
  {
    id: "ai-web-development",
    title: "AI Web Development",
    shortDescription: "Custom-coded websites built faster with AI-assisted tooling.",
    longDescription:
      "Get a fully custom, production-ready website, not a template. I design and prototype the layout in Framer, then build the real, coded site in VS Code. This keeps the design phase fast while the final build stays genuinely custom.",
    icon: "Globe",
    media: {
      kind: "video",
      src: "/videos/services/ai-web-development.mp4",
      autoPlay: true,
      poster: "/videos/services/ai-web-development-poster.jpg",
    },
    category: "service",
    result: "Result: a custom site, live and production-ready.",
    price: "Custom quote",
    linkGroups: [
      {
        heading: "VS Code and Antigravity with Claude Code",
        links: [
          { label: "FinTrack", href: "https://financial-tracker-app-six.vercel.app/" },
          { label: "Voyage Vista", href: "https://voyage-vista-delta.vercel.app/" },
          { label: "Brew & Co.", href: "https://brew-and-co-ebon.vercel.app/" },
          { label: "Habit Tracker", href: "https://habit-tracker-app-steel.vercel.app" },
        ],
      },
      {
        heading: "Framer",
        links: [
          { label: "Blissful Platforms", href: "https://blissful-platforms-549506.framer.app/" },
          { label: "Easygoing Center", href: "https://easygoing-center-272197.framer.app/" },
          { label: "Orchid Industry", href: "https://orchid-industry-782081.framer.app/" },
        ],
      },
    ],
  },
  {
    id: "automation",
    title: "Automation",
    shortDescription: "n8n and API-based workflow automation.",
    longDescription:
      "Get repetitive manual work off your plate. I connect the apps you already use with n8n and direct API integrations so information moves between them automatically, and build simple chatbots that handle routine requests on their own.",
    icon: "Workflow",
    media: { kind: "image", src: "/images/services/automation.png", width: 1886, height: 958 },
    category: "service",
    result: "Result: what used to take 3 days now runs in about 4 minutes.",
    price: "Custom quote",
  },
];
