const BlogList = () => {
  const blogs = [
    { id: 1, title: "Blog Post 1", author: "John Doe" },
    { id: 2, title: "Blog Post 2", author: "Alice Smith" },
    { id: 3, title: "Blog Post 3", author: "Bob Johnson" },
  ];

  const handleEdit = (blogId) => {
    console.log(`Edit blog with ID ${blogId}`);
  };

  const handleDelete = (blogId) => {
    console.log(`Delete blog with ID ${blogId}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-2xl font-semibold mb-4">Blog List</h2>

      <div className="mb-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md mr-4">
          Add Blog
        </button>
      </div>

      <table className="min-w-full bg-white rounded-md shadow-md">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 text-left">ID</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">
              Title
            </th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">
              Author
            </th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td className="py-2 px-4 border-b border-gray-200">{blog.id}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                {blog.title}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {blog.author}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button
                  className="bg-blue-500 text-white py-1 px-2 rounded-md mr-2"
                  onClick={() => handleEdit(blog.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white py-1 px-2 rounded-md"
                  onClick={() => handleDelete(blog.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogList;
