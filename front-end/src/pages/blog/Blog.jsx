import { useLocation } from "react-router-dom";
import BlogCard from "../../components/blogCards/blog";
const Blog = () => {
  const location = useLocation();
  const params = location.pathname.slice(1);
  return <BlogCard />;
};

export default Blog;
