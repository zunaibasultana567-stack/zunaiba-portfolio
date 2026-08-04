// FAQ content shown as an accordion. Add/edit/remove items freely —
// the Accordion component renders whatever is in this array.

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "faq-6",
    question: "What is AI automation and how can it help my business?",
    answer:
      "AI automation uses AI tools and workflow software to handle repetitive tasks like data entry, email replies, content creation, and reporting automatically. For your business, that means fewer manual hours spent on routine work, faster turnaround on tasks like content and design, and more time for your team to focus on the work that actually moves things forward.",
  },
  {
    id: "faq-7",
    question: "Which AI tools do you use (Claude, ChatGPT, Gemini, n8n)?",
    answer:
      "I regularly work with Claude and Claude Code for AI-assisted development and content, ChatGPT and Gemini for research, writing, and ideation, and n8n for building automated workflows that connect your apps and APIs together. I pick whichever tool fits the task best rather than relying on just one.",
  },
  {
    id: "faq-8",
    question: "Can you build a custom AI chatbot or automation for my business?",
    answer:
      "Yes. I build custom chatbots and automated workflows tailored to your business, whether that's answering customer questions, routing leads, or connecting tools like your website, email, and CRM so tasks run without manual input.",
  },
  {
    id: "faq-9",
    question: "Are AI-generated images and logos safe for commercial/trademark use?",
    answer:
      "AI-generated images and logos can generally be used commercially, but trademark protection works a bit differently, since pure AI output isn't always eligible for copyright registration on its own. I recommend having any logo you plan to trademark reviewed and refined with enough human creative input to support registration, and I'm happy to guide you through that process.",
  },
  {
    id: "faq-10",
    question: "Do you disclose your use of AI tools to clients?",
    answer:
      "Yes, always. I'm upfront about which parts of a project use AI assistance, whether that's design generation, content writing, or automation, so you always know exactly how your project was built.",
  },
];
