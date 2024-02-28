import { Link } from "react-router-dom";
const ServicesListing = (prop) => {
  const name = "Abi Makeup & Hair";
  const servicesNearYou = [];
  for (let i = 0; i < 4; i++) {
    servicesNearYou.push(
      <div
        key={i}
        className="relative w-11/12 sm:w-2/5 md:w-3/12 lg:w-[23%] aspect-[5/6] p-2 rounded-lg shadow-md bg-white"
      >
        <img
          src="https://www.reviewethio.com/wp-content/uploads/2018/11/Abi1.jpg"
          className="rounded-xl w-full aspect-[3/2] object-cover"
        />
        <p className="text-center pt-4">
          <span className="text-lg font-semibold block">Abi Makeup & Hair</span>
          <span className="text-sm block">Addis Ababa, Lafto (4.5/5)</span>
          <Link to={`Service/${name.replaceAll(" ", "-")}`}>
            <button className="my-4 bg-blue-500 text-white w-11/12 mx-auto py-1 rounded-full">
              View Details
            </button>
          </Link>
        </p>
      </div>
    );
  }

  return (
    <section className="mx-auto lg:max-w-7xl flex flex-wrap gap-4 p-4 ">
      <h1 className="text-2xl font-semibold my-4 w-full">{prop.filter}</h1>
      {servicesNearYou}
      <p className="w-full flex justify-end">
        <Link to={`Services/${prop.filter}`}>View All </Link>
      </p>
    </section>
  );
};

export default ServicesListing;
