import { Link } from "react-router-dom";

const FeaturedServices = () => {
  const name = "Abi Makeup & Hair";
  const featuredServices = [];
  for (let i = 0; i < 4; i++) {
    featuredServices.push(
      <div
        key={i}
        className="relative aspect-[3/2] w-11/12 mx-auto sm:w-[48%] md:w-[32%] lg:w-[23%] sm:mx-0 overflow-hidden rounded-lg bg-black/60"
      >
        <Link to={`Service/${name.replaceAll(" ", "-")}`}>
          <img
            src="https://www.reviewethio.com/wp-content/uploads/2018/11/Abi1.jpg"
            className="absolute mix-blend-overlay"
          />
          <p className="w-full h-full text-white flex flex-col justify-end p-8 py-4">
            <span className="text-lg font-semibold ">Abi Makeup & Hair </span>

            <span className="text-sm">Addis Ababa, Lafto (4.5/5)</span>
          </p>
        </Link>
      </div>
    );
  }
  return (
    <section className="mx-auto lg:max-w-7xl  flex gap-4 lg:p-4 flex-wrap mt-4 p-4">
      <h1 className="text-2xl font-semibold my-4 w-full">Features Services</h1>
      {featuredServices}
      <p className="w-full flex justify-end">
        <button>View All </button>
      </p>
    </section>
  );
};

export default FeaturedServices;
