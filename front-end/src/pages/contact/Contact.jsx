import { useLocation } from "react-router-dom";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

const data = [
  {
    id: 1,
    name: "Our Location",
    description: "W898 Suite 56 'Brockland',CA 9622 United States",
    icon: (
      <CiLocationArrow1 className="text-orange-500 uppercase text-3xl font-semibold" />
    ),
  },
  {
    id: 2,
    name: "Our Email",
    description: "Email Us: Support@info.Com Vanamsupport.com",
    icon: (
      <MdAttachEmail className="text-orange-500 uppercase text-3xl font-semibold" />
    ),
  },
  {
    id: 3,
    name: "Our Phone",
    description: "Phone: +1234567890",
    icon: (
      <FaPhoneVolume className="text-orange-500 uppercase text-3xl font-semibold" />
    ),
  },
];

const Contact = () => {
  const location = useLocation();
  const params = location.pathname.slice(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted!");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex flex-col justify-center items-center gap-3 h-[210px] bg-[url(https://ninetheme.com/themes/venam/v2/wp-content/uploads/2021/05/breadcrumb_bg.jpg)]">
        <h3 className="text-4xl font-semibold uppercase text-center  pt-20">
          Contact
        </h3>
        <BreadCrumbs className={""} params={params} />
      </div>

      <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
        <h4 className="text-2xl font-semibold mb-4">Contact Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex items-center border-b border-gray-200 pb-4"
            >
              <div className="mr-4">{item.icon}</div>
              <div>
                <h5 className="text-lg font-semibold">{item.name}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
        <h4 className="text-2xl font-semibold mb-4">Contact Form</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-800 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
