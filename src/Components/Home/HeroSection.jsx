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
      <Slider
        {...settings}
        className="mx-auto lg:max-w-7xl md:mt-12 my-12 italic"
      >
        <div>
          <h3 className="text-center flex items-center p-4 font-serif max-w-xs lg:max-w-sm aspect-[4/2] m-4  mx-auto rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 ">
            <span className="text-3xl text-white font-thin">
              Find all your favorite service providers at one place
            </span>
          </h3>
        </div>
        <div>
          <h3 className="text-center flex items-center p-4 font-serif max-w-xs lg:max-w-sm aspect-[4/2] m-4  mx-auto rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 ">
            <span className="text-3xl text-white font-thin">
              Book your service and get notified on the day
            </span>
          </h3>
        </div>
        <div>
          <h3 className="text-center flex items-center p-4 font-serif max-w-xs lg:max-w-sm aspect-[4/2] m-4  mx-auto rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 ">
            <span className="text-3xl text-white font-thin">
              List your Services and accept appointmnets
            </span>
          </h3>
        </div>
        <div>
          <h3 className="text-center flex items-center p-4 font-serif max-w-xs lg:max-w-sm aspect-[4/2] m-4  mx-auto rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 ">
            <span className="text-3xl text-white font-thin">
              Manage all your service appointmnets at one place
            </span>
          </h3>
        </div>
        <div>
          <h3 className="text-center flex items-center p-4 font-serif max-w-xs lg:max-w-sm aspect-[4/2] m-4  mx-auto rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 ">
            <span className="text-3xl text-white font-thin">
              Find all your favorite service providers at one place
            </span>
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
