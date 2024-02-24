import { useParams } from "react-router-dom";

const Service = () => {
  const { name } = useParams();
  const servicesList = [];
  const staffs = [];
  for (let i = 0; i < 8; i++) {
    servicesList.push(
      <div
        key={i}
        className="flex gap-4 justify-between font-serif min-w-xs items-center bg-[#f3d52d22] p-4 rounded-lg"
      >
        <div>
          <p className="font-semibold text-lg">Manicure With Gel Polish</p>
          <p className="text-gray-600">1hr 30min</p>
          <p className="font-semibold">300 Br.</p>
        </div>
        <button className="font-bold text-3xl bg-[#f4db9b] text-gray-600 flex justify-center items-center rounded-xl w-10 h-10">
          &gt;
        </button>
      </div>
    );
  }
  for (let i = 0; i < 8; i++) {
    staffs.push(
      <div
        key={i}
        className="flex gap-6 justify-between font-serif min-w-sm items-center bg-[#f3d52d22] p-4 rounded-xl"
      >
        <div className="flex gap-4">
          <img
            src="https://www.reviewethio.com/wp-content/uploads/2018/11/Abi1.jpg"
            className="w-16 h-16 rounded-full"
          />
          <p className="font-bold text-sky-950">
            Helen Ayachew <br />
            <span className="text-sm text-gray-500">Hairstylist</span>
          </p>
        </div>
        <button className="font-bold bg-[#f4db9b] text-gray-700 p-2 px-4 rounded-lg">
          Book Now
        </button>
      </div>
    );
  }
  return (
    <section className="mx-auto lg:max-w-7xl  mt-4 p-4">
      <div className="bg-black/70 text-slate-50 flex justify-between items-center p-4 px-8 rounded-lg">
        <div>
          <h1 className="text-2xl font-semibold whitespace-nowrap">
            {name.replaceAll("-", " ")}
          </h1>
          <p>Addis Ababa, Lafto</p>
        </div>
        <p>4.5/5</p>
      </div>
      <div className="flex-col md:flex-row flex gap-2 bg-white rounded-lg my-6">
        <div className="md:w-1/2">
          <img
            src="https://www.reviewethio.com/wp-content/uploads/2018/11/Abi1.jpg"
            alt=""
            className="m-3 rounded-xl"
          />
        </div>
        <div className="md:w-1/2 p-8">
          <h2 className="text-xl font-semibold whitespace-nowrap my-4 py-2 border-blue-500 border-b-4">
            About Us
          </h2>
          <p className="text-gray-600 leading-6 font-serif">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            impedit similique magnam possimus, amet est, molestiae officiis
            eveniet incidunt perferendis iste aliquam doloremque ea totam veniam
            obcaecati dolores corporis ipsum. Quidem expedita praesentium
            dolorem consequuntur doloribus, repellendus sapiente placeat nulla
            velit error laboriosam vitae sed ut. Qui nisi atque, saepe ab eaque
            omnis quisquam sint cumque nobis reprehenderit laudantium totam!
            Harum sequi sint saepe quam ipsum soluta.
          </p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg my-4">
        <ul className="flex gap-8 text-lg overflow-scroll md:overflow-auto">
          <li className="bg-black/90 text-white py-1 px-6 rounded-full">
            <button> Services</button>
          </li>
          <li className="">
            <button> Staff</button>
          </li>
          <li className="">
            <button> Reviews</button>
          </li>
          <li className="">
            <button> Location</button>
          </li>
        </ul>
      </div>
      <div className="p-4 flex flex-wrap gap-4">{servicesList}</div>
      <h1 className="text-2xl font-semibold whitespace-nowrap mt-6">Staffs</h1>
      <div className="p-4 flex flex-wrap gap-4">{staffs}</div>
    </section>
  );
};

export default Service;
