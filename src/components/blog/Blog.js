"use client";
import BlogCard from "../cards/BlogCard";
import DotsSlider from "../DotsSlider";
import SectionHeader from "../SectionHeader";

const blogs = [
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
    <div>
      {/* section Header  */}
      <SectionHeader title={"From The Blog"} btn={"Discover All"} />

      {/* Blog Card */}
      <div className="container mx-auto px-4">
        <DotsSlider
          data={blogs}
          CardComponent={BlogCard}
          uniqueId="blog-slider"
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          paginationColor="#6c63ff"
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        />
      </div>
    </div>
  );
}

export default Blog;
