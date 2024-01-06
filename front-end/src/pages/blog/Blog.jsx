import { useLocation } from "react-router-dom";
import BlogCard from "../../components/blogCards/blog";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import { Wrapper } from "../../components/wrapper/Wrapper";
const Blog = () => {
  const location = useLocation();
  const params = location.pathname.slice(1);
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 h-[210px] bg-[url(https://ninetheme.com/themes/venam/v2/wp-content/uploads/2021/05/breadcrumb_bg.jpg)]">
        <h3 className="text-[38px] font-[600] uppercase">Blog</h3>
        <BreadCrumbs className={""} params={params} />
      </div>

      <Wrapper className="w-full  py-16">
        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {Array(5)
            .fill(5)
            .map((item, index) => {
              return <BlogCard key={index} />;
            })}
        </div>
      </Wrapper>
    </>
  );
};

export default Blog;
