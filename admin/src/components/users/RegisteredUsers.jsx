import { useEffect, useState } from "react";
import axios from "axios";

const RegisteredUsers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
        setLoading(true)
      const response = await axios.get(
        "http://localhost:9000/user/getAllUsers"
      );
      const result = await response.data;
      setLoading(false)
      console.log(result);
      setData(result);
    } catch (err) {
        setLoading(false)
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:9000/user/deleteSingleUser/${id}`
      );
      console.log(response);
      if (response.status === 200) {
        fetchData();
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              createdAt
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Emal
            </th>
            <th scope="col" className="px-6 py-3">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="6">Loading...</td>
            </tr>
          ) : data.length < 1 ? (
            <tr>
              <td colSpan="6">NO products found!</td>
            </tr>
          ) : (
            data.map((item) => (
              <tr
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                key={item._id}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.createdAt}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4 truncate">{item.email}</td>
                <td className="px-6 py-4 flex gap-1">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                  <span>/</span>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RegisteredUsers;
