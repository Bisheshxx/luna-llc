import { Cart, Categories, IFAQ, Product } from "@/types";
import Saree from "../../public/Saree.jpeg";
import Kurtha from "../../public/Kurtha.jpeg";

export const categories: Categories[] = [
  {
    name: "Kurtha",
    images: Kurtha,
  },

  {
    name: "Saree",
    images: Saree,
  },
  {
    name: "Accessories",
    images:
      "https://superette.co.nz/cdn/shop/collections/Collection_Page_1b4b550d-82f6-49c3-b418-b4989b146777.png?v=1724038073&height=2000",
  },
];

export const FAQData: IFAQ[] = [
  {
    question: "What types of ethnic clothing and accessories do you sell?",
    answer:
      "We offer a wide range of authentic ethnic clothing and accessories, including traditional garments, scarves, shawls, jewelry, belts, and headpieces, crafted with high-quality materials.",
  },
  {
    question: "Are your products ethically sourced?",
    answer:
      "Yes, we prioritize ethical sourcing and sustainable practices, ensuring that all our products are made with respect for cultural heritage and the environment.",
  },
  {
    question: "Do you offer custom-made ethnic clothing or accessories?",
    answer:
      "Yes, we offer customization options for certain clothing and accessories. Please contact us for more details.",
  },
  {
    question: "How can I place an order?",
    answer:
      "You can shop directly on our website or visit our social media platforms (put links, make hyperlink) to place an order.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we offer international shipping. Delivery times and fees vary depending on your location.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 14 days of purchase, provided the items are unused and in their original condition. Some exclusions may apply.",
  },
  {
    question: "How should I care for my ethnic clothing and accessories?",
    answer:
      "To ensure longevity, follow the care instructions provided with each item. Avoid exposure to harsh chemicals, and store clothing in a cool, dry place when not in use.",
  },
  {
    question: "Can I find matching sets for ethnic clothing and accessories?",
    answer:
      "Yes, many of our pieces come in matching sets, or we can help you curate complementary items for a complete look.",
  },
  {
    question: "Do you offer gift wrapping or gift cards?",
    answer:
      "Yes, we offer gift wrapping services and gift cards, making it easy to share the beauty of ethnic fashion with loved ones.",
  },
  {
    question: "Are there any discounts for bulk purchases?",
    answer:
      "We offer discounts for bulk orders. Please contact us directly for more information on special pricing and offers.",
  },
];

export const StaticDataSEO = [
  {
    heading: "Our Story",
    content: `  Luna LLC was founded with a mission to celebrate and preserve
    cultural heritage through authentic, high-quality ethnic clothing
    and accessories. We believe in fostering a sense of community
    while promoting ethical and sustainable practices in the fashion
    industry. By offering personalized shopping experiences, Luna
    Ethnics strives to become Japan’s go-to destination for unique
    ethnic wear, providing exceptional value while honoring diverse
    traditions and craftsmanship.`,
  },
];
