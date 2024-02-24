import { Link, useParams } from "react-router-dom";
import ServicesListing from "../Components/Home/ServicesList";

const Services = () => {
  const { filter } = useParams();
  const servicesNearYou = [];
  for (let i = 0; i < 15; i++) {
    servicesNearYou.push(
      <div
        key={i}
        className="relative w-11/12 max-w-56  aspect-[5/6] p-2 rounded-lg shadow-md bg-white"
      >
        <img
          src="https://www.reviewethio.com/wp-content/uploads/2018/11/Abi1.jpg"
          className="rounded-xl w-full aspect-[3/2] object-cover"
        />
        <p className="text-center pt-4">
          <span className="text-lg font-semibold block">Abi Makeup & Hair</span>
          <span className="text-sm block">Addis Ababa, Lafto (4.5/5)</span>
          <Link>
            <button className="my-4 bg-blue-500 text-white w-11/12 mx-auto py-1 rounded-full">
              View Details
            </button>
          </Link>
        </p>
      </div>
    );
  }
  return (
    <section className="mx-auto lg:max-w-7xl  flex gap-4 lg:p-4 flex-wrap mt-4 p-4">
      <h1 className="text-2xl font-semibold my-4 w-full">
        {filter} Services
        <span className="font-thin text-lg p-2">(230 results)</span>
      </h1>
      {servicesNearYou}
      <p className="text-center w-full">
        <button className="my-10 bg-black/80 text-white py-2 px-10 rounded-full">
          Load More
        </button>
      </p>
    </section>
  );
};

export default Services;
