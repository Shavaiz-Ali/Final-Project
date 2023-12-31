import { useLocation } from "react-router-dom";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import SingleBlogPost from "../../components/singleBlogPost";
import banner from "../../assets/banner.png";

const SingleBlog = () => {
  const location = useLocation();
  const params = location.pathname.slice(1);
  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center gap-3 h-[210px] bg-[url(https://ninetheme.com/themes/venam/v2/wp-content/uploads/2021/05/breadcrumb_bg.jpg)]">
          <h3 className="text-[38px] font-[600] uppercase">Blog Posts</h3>
          <BreadCrumbs className={""} params={params} />
        </div>

        <SingleBlogPost />

        <div className="w-full">
          <img src={banner} alt="banner" />
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
