import SectionHeader from "../SectionHeader";
import BlogCard from "../cards/BlogCard";

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
      <div className="container mx-auto grid grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog?.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
