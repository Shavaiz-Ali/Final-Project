import blogImage from "../../assets/shop-view.jpg";

const SingleBlogPost = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Title of the Blog Post
        </h1>
        <p className="text-gray-600">Published on January 6, 2024</p>
      </header>

      <main className="max-w-6xl mx-auto bg-white p-8 rounded-md shadow-md">
        <article className="prose lg:prose-xl">
          <img
            src={blogImage}
            alt="Blog post header image"
            className="w-full rounded-md mb-6 h-[500px] object-cover"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            scelerisque magna non urna commodo, vel lobortis purus accumsan.
            Quisque interdum risus id enim maximus, eu consectetur mauris
            fringilla.
          </p>
        </article>
      </main>
    </div>
  );
};

export default SingleBlogPost;
