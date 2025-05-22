import defaultImg from "../../assets/images/default_person.png";

export interface TestimonialItemProps {
  image: string;
  name: string;
  feedback: string;
  onClick: () => void;
}

export const testimonials: TestimonialItemProps[] = [
  {
    image: defaultImg,
    name: "Imran Khan",
    feedback:
      "Aaqil was hired to create a corporate identity for our company. We were extremely pleased with the work.Aaqil was hired to create a corporate identity for our companyAaqil was hired to create a corporate identity for our companyAaqil was hired to create a corporate identity for our companyAaqil was hired to create a corporate identity for our company",
    onClick: () => {},
  },
  {
    image: defaultImg,
    name: "Salman Shaikh",
    feedback:
      "Aaqil's expertise and dedication to our project were truly impressive. He demonstrated a strong grasp of modern technologies.",
    onClick: () => {},
  },
  {
    image: defaultImg,
    name: "Salman Shaikh",
    feedback:
      "Aaqil's expertise and dedication to our project were truly impressive. He demonstrated a strong grasp of modern technologies.",
    onClick: () => {},
  },
  {
    image: defaultImg,
    name: "Salman Shaikh",
    feedback:
      "Aaqil's expertise and dedication to our project were truly impressive. He demonstrated a strong grasp of modern technologies.",
    onClick: () => {},
  },
];
