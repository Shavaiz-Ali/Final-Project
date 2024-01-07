import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUsers } from "../../store/users/users.action";
import { Dialog } from "@headlessui/react";
const UserList = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const { allUsers, isUserFetching, isUserFetched } = useSelector(
    (state) => state.getAllUsers
  );

  const confirmDelete = () => {
    if (id) dispatch(deleteUser(id));
    dispatch(getAllUsers());
    setShowDeleteModal(false);
  };

  const handleDelete = (userId) => {
    console.log(`Delete user with ID ${userId}`);
    setShowDeleteModal(true);
    setId(userId);
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <>
      {isUserFetching && <p>loading...</p>}
      <div className="bg-gray-100 min-h-screen p-6">
        <h2 className="text-2xl font-semibold mb-4">User List</h2>

        <table className="min-w-full bg-white rounded-md shadow-md">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 text-left">
                ID
              </th>
              <th className="py-2 px-4 border-b border-gray-200 text-left">
                Name
              </th>
              <th className="py-2 px-4 border-b border-gray-200 text-left">
                Email
              </th>
              <th className="py-2 px-4 border-b border-gray-200 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {isUserFetched &&
              allUsers &&
              allUsers.map((user) => (
                <tr key={user.id}>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {user._id}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {user.name}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {user.email}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    <button
                      className="bg-red-500 text-white py-1 px-2 rounded-md"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Dialog
        as="div"
        open={showDeleteModal}
        className="relative z-50"
        onClose={() => setShowDeleteModal(false)}
      >
        <div className="fixed inset-0 bg-black/25" />
        <Dialog.Panel className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-5 rounded-lg">
          <Dialog.Title as="h3" className="text-lg font-semibold mb-4">
            Confirm Delete
          </Dialog.Title>
          <Dialog.Description as="p" className="mb-4">
            Are you sure you want to delete this user?
          </Dialog.Description>
          <div className="flex justify-end">
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-md mr-4"
              onClick={confirmDelete}
            >
              Delete
            </button>
            <button
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md"
              onClick={() => setShowDeleteModal(false)}
            >
              Cancel
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default UserList;
