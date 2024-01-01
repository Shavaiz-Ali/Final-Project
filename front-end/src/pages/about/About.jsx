import { useLocation } from "react-router-dom";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import StorySection from "../../components/storySection";
import ExperienceCard from "../../components/experienceCard";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import ReviewCard from "../../components/reviewCard";
import banner from "../../assets/banner.png";
import { Wrapper } from "../../components/wrapper/Wrapper";

const data = [
  {
    id:1,
    name: "Home Fast Delivery",
    description:
      "Lorem Ipsum simply dumm the printing and typesetting indust orem Ipsum has been the industry standard dummy men book.",
    feature1: "Smart UHD TV",
    feature2: "Snow Frost in Freezer",
    icon: (
      <BsFillRocketTakeoffFill className="text-orange-500 uppercase text-5xl font-semibold" />
    ),
  },
  {
    id:2,
    name: "Secure Payment",
    description:
      "Lorem Ipsum simply dumm the printing and typesetting indust orem Ipsum has been the industry standard dummy men book.",
    feature1: "24/7 Support",
    feature2: "Money back in 15 days",
    icon: (
      <RiSecurePaymentLine className="text-orange-500 uppercase text-5xl font-semibold" />
    ),
  },
  {
    id:3,
    name: "24/7 Customer Support",
    description:
      "Lorem Ipsum simply dumm the printing and typesetting indust orem Ipsum has been the industry standard dummy men book.",
    feature1: "Smart UHD TV",
    feature2: "Snow Frost in Freezer",
    icon: (
      <BsFillTelephoneFill className="text-orange-500 uppercase text-5xl font-semibold" />
    ),
  },
];
const About = () => {
  const location = useLocation();
  const params = location.pathname.slice(1);
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-3 h-[210px] bg-[url(https://ninetheme.com/themes/venam/v2/wp-content/uploads/2021/05/breadcrumb_bg.jpg)]">
        <h3 className="text-[38px] font-[600] uppercase">About</h3>
        <BreadCrumbs className={""} params={params} />
      </div>
      <StorySection />

      {/* Experice Section */}
      <Wrapper className="w-full bg-[#f5f4ee] py-16">
        <p className="uppercase text-orange-500 text-center font-bold text-[12px]">
          Why Choose Us
        </p>
        <p className="uppercase text-center py-4 text-4xl font-semibold">
          EXPERIENCE IN SETTING UP
        </p>
        <div className="flex justify-center flex-wrap  gap-5 px-5 py-24 ">
          {data.map((item) => {
            return <ExperienceCard {...item} key={item.id}/>;
          })}
        </div>
      </Wrapper>

      {/* Experice Section Ended*/}

      {/* Review Section */}
      <Wrapper className="w-full  py-16">
        <p className="uppercase text-orange-500 text-center font-bold text-[12px]">
          OUR TESTIMONIAL
        </p>
        <p className="uppercase text-center py-4 text-4xl font-semibold">
          HAPPY CUSTOMER QUOTES
        </p>
        <div className="flex justify-center flex-wrap  gap-5 px-5 py-24 ">
          {Array(3)
            .fill(3)
            .map((item, index) => {
              return <ReviewCard key={index}/>;
            })}
        </div>
      </Wrapper>

      {/* Review Section Ended */}

      {/* Banner */}
      <div className="w-full">
        <img src={banner} alt="banner" />
      </div>
      {/* Banner Ended*/}
    </div>
  );
};

export default About;
