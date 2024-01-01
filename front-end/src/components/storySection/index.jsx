import story from "../../assets/shop-view.jpg";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BiDollarCircle } from "react-icons/bi";
import { BsAwardFill } from "react-icons/bs";
import {Wrapper} from "../wrapper/Wrapper"
const StorySection = () => {
  return (
    <>
      {/* Story Section */}

      <Wrapper className="w-full flex flex-col lg:flex-row items-start lg:px-48 lg:py-28">
        <div className="w-full lg:w-1/2 ">
          <img src={story} alt="story" className="w-full h-auto " />
        </div>

        <div className="w-full lg:w-1/2  px-9">
          <h1 className="uppercase text-2xl font-semibold lg:mt-0 mt-3">Our Story</h1>
          <p className="text-gray-500 py-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            indust orem Ipsum has been the industry’s standard dummy texever
            since the when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>

          <p className="text-gray-500">
            Dorem Ipsum is simply dummy consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam…
          </p>

          <div>
            <h1 className="text-orange-500 uppercase text-1xl font-semibold py-7">
              Mission of Our Creative House
            </h1>

            <hr />
            <div className="flex sm:flex-nowrap flex-wrap gap-8 py-10">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <div>
                    <IoDocumentTextOutline className="flex w-12 h-12 text-gray-500" />
                  </div>
                  <div>
                    <p className="flex font-bold text-gray-600 sm:text-3xl text-[1.3rem] py-5">
                      324+
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-600 text-[12px] pl-3">
                    Projects
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <div>
                    <BiDollarCircle className="flex w-12 h-12 text-gray-500" />
                  </div>
                  <div>
                    <p className="flex font-bold text-gray-600 sm:text-3xl text-[1.3rem]  py-5">
                      $3M
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-600 text-[12px] pl-3">
                    Revenue
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <div>
                    <BsAwardFill className="flex w-12 h-12 text-gray-500" />
                  </div>
                  <div>
                    <p className="flex font-bold text-gray-600 sm:text-3xl text-[1.3rem] py-5">
                      379+
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-600 text-[12px] pl-3">
                    Awards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>

      {/* Story Section Ended */}
    </>
  );
};

export default StorySection;
