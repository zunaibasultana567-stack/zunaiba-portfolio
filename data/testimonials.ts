// EDIT ME: replace these placeholder testimonials with real client quotes.

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sarah Bennett",
    role: "Founder, Bennett & Co.",
    quote:
      "Working together was seamless from kickoff to launch, and the final site turned out even better than we pictured it.",
    rating: 5,
    avatar: "/images/testimonials/person-1-v2.webp",
  },
  {
    id: "testimonial-2",
    name: "James Whitfield",
    role: "Marketing Lead, Northline Studio",
    quote:
      "The automation work alone saved our team hours every week. Clear communication throughout the whole project.",
    rating: 5,
    avatar: "/images/testimonials/person-2-v3.webp",
  },
  {
    id: "testimonial-3",
    name: "Priya Malhotra",
    role: "Founder, Malhotra Design",
    quote:
      "Exactly the mix of design sense and technical skill we needed, and we'd work together again in a heartbeat.",
    rating: 5,
    avatar: "/images/testimonials/person-3.webp",
  },
  {
    id: "testimonial-4",
    name: "David Chen",
    role: "Operations Manager, Chen Logistics Group",
    quote:
      "They caught details we hadn't even thought to ask about. The whole process felt effortless on our end.",
    rating: 5,
    avatar: "/images/testimonials/person-4.webp",
  },
  {
    id: "testimonial-5",
    name: "Olivia Turner",
    role: "Co-Founder, Turner Labs",
    quote:
      "Fast turnaround without cutting corners. Our new workflow alone paid for the project within a month.",
    rating: 5,
    avatar: "/images/testimonials/person-5-v3.webp",
  },
  {
    id: "testimonial-6",
    name: "Marcus Reed",
    role: "Creative Director, Reed Creative Agency",
    quote:
      "A rare combination of strong design instincts and genuine technical depth. Highly recommend.",
    rating: 5,
    avatar: "/images/testimonials/person-6.webp",
  },
];
