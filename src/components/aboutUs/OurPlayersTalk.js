"use client";
import TestimonialCard from "../cards/TestimonialCard";
import Container from "../Container";
import DotsSlider from "../DotsSlider";
import SectionHeader from "../SectionHeader";

const testimonials = [
  {
    id: 1,
    image: "/images/author.png",
    text: "The standard chunk of Lorem Ipsum used since the 1500 is reproduced below for those interested Sections 1.10.32 and 1.10.33.",
    linkText: "Stromup: Undersea Tripeaks",
    linkUrl: "#",
    author: "Kajalo Jennifer",
  },
  {
    id: 2,
    image: "/images/author1.png",
    text: "There are many variations of passages available but majority have suffered from alteration in some forms by believable dummy text.",
    linkText: "Spartan: Shadow Empires",
    linkUrl: "#",
    author: "Jordan Cook",
  },
  {
    id: 3,
    image: "/images/author2.png",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its using layouts.",
    linkText: "Throne: Unions of Legends",
    linkUrl: "#",
    author: "Atharv Anthony",
  },
  {
    id: 4,
    image: "/images/author1.png",
    text: "There are many variations of passages available but majority have suffered from alteration in some forms by believable dummy text.",
    linkText: "Spartan: Shadow Empires",
    linkUrl: "#",
    author: "Jordan Cook",
  },
];

function OurPlayersTalk() {
  return (
    <Container>
      <SectionHeader title={"Our Players Talk"} justify="center" />
      <DotsSlider
        data={testimonials}
        CardComponent={TestimonialCard}
        uniqueId="our-players-talk"
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        paginationColor="#6c63ff"
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      />
    </Container>
  );
}

export default OurPlayersTalk;
