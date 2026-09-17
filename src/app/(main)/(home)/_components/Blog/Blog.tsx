"use client";
import BlogCard from "@/components/ui/cards/BlogCard";
import Container from "@/components/shared/Container";
import DotsSlider from "@/components/shared/DotsSlider";
import SectionHeader from "@/components/shared/SectionHeader";

interface BlogItem {
  id: number;
  image: string;
  title: string;
  tag: string;
  url: string;
}

const blogs: BlogItem[] = [
  {
    id: 1,
    image: "/images/blog1.jpeg",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    tag: "Gaming News",
    url: "/blog/top-10-upcoming-games-2025",
  },
  {
    id: 2,
    image: "/images/blog2.jpeg",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    tag: "Guides",
    url: "/blog/gaming-setup-on-budget",
  },
  {
    id: 3,
    image: "/images/blog3.jpeg",
    title: "PC vs Console: Which Is Better for Modern Gaming?",
    tag: "Industry",
    url: "/blog/rise-of-indie-developers",
  },
];

function Blog() {
  return (
    <>
      {/* section Header  */}
      <SectionHeader title={"From The Blog"} btn={"Discover All"} />

      {/* Blog Card */}
      <Container>
        <DotsSlider
          data={blogs}
          CardComponent={BlogCard}
          uniqueId="blog-slider"
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        />
      </Container>
    </>
  );
}

export default Blog;
