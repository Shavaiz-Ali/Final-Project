import { Link } from "react-router-dom";
import blogImage from "../../assets/shop-view.jpg";

function BlogCard() {
  return (
    <>
      <div className="cursor-pointer text-center space-x-4">
        {/* <Link to={`/product/${item._id}`} state={{ item: item }}> */}
        <Link to={`/blog/123331232`}>
          <img
            // src={"http://localhost:9000/" + item.image}
            src={blogImage}
            alt="imagecup"
            className="w-full h-[240px] object-cover"
          />

          <h4 className="font-bold font-poppins leading-tight overflow-hidden overflow-ellipsis whitespace-nowrap pt-5 text-left">
            Title
          </h4>
          <p className="font-thin text-[#415161] overflow-ellipsis text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt,
            nisi? Obcaecati magni ex aliquam illo dolore distinctio id
            cupiditate necessitatibus aspernatur molestias. Et!
          </p>

          <p className="text-left text-orange-600 py-2 text-sm hover:text-orange-800">
            Read More
          </p>
        </Link>
      </div>
    </>
  );
}

export default BlogCard;
