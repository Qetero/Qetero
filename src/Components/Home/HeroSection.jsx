import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
const HeroSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings} className="mx-auto lg:max-w-7xl md:mt-12 my-12">
        <div>
          <div className="relative aspect-[4/2] m-4 mx-auto max-w-xs lg:max-w-sm overflow-hidden rounded-lg bg-black/60">
            <img
              src="https://www.reviewethio.com/wp-content/uploads/2018/11/Abi1.jpg"
              className="absolute mix-blend-overlay"
            />
            <p className="w-full h-full text-white flex flex-col justify-end p-8 py-4">
              <span className="text-lg font-semibold ">Abi Makeup & Hair </span>

              <span className="text-sm">Addis Ababa, Lafto (4.5/5)</span>
            </p>
          </div>
        </div>
        <div>
          <h3 className=" max-w-xs lg:max-w-sm aspect-[4/2] m-4  mx-auto rounded-lg bg-green-800/45">
            2
          </h3>
        </div>
        <div>
          <h3 className=" max-w-xs lg:max-w-sm aspect-[4/2] m-4  mx-auto rounded-lg bg-green-800/45">
            3
          </h3>
        </div>
        <div>
          <h3 className=" max-w-xs lg:max-w-sm aspect-[4/2] m-4  mx-auto rounded-lg bg-green-800/45">
            4
          </h3>
        </div>
        <div>
          <h3 className=" max-w-xs lg:max-w-sm aspect-[4/2] m-4  mx-auto rounded-lg bg-green-800/45">
            5
          </h3>
        </div>
        <div>
          <h3 className=" max-w-xs lg:max-w-sm aspect-[4/2] m-4  mx-auto rounded-lg bg-green-800/45">
            6
          </h3>
        </div>
      </Slider>
      <br />
      <p className=" text-center text-2xl md:mt-6 font-serif p-2">
        <span className="block tect-3xl font-semibold">
          Create and track all your service appointments at one place
        </span>
      </p>
      <p className="text-center mt-6 mb-12">
        <Link
          to="/sign-up"
          className="text-white rounded-full bg-blue-500 py-2 px-12 text-lg font-thin shadow-lg  hover:scale-110"
        >
          Join Now
        </Link>
      </p>
    </>
  );
};

export default HeroSection;
