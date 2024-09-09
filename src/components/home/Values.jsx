import { BoardData } from "@/data/values";

const Values = () => {
  return (
    <div className="w-full flex flex-col items-center bg-gardening-green-100 py-10">
      <p className="m-0 text-4xl text-center sm:text-5xl font-bold text-gardening-white-100">
        Our Values and Mission
      </p>

      <div className="flex justify-around w-full max-w-6xl my-10">
        {BoardData.map((item, index) => (
          <div
            key={index}
            className={`w-20 sm:w-32 h-32 sm:h-44 flex flex-col text-center items-center bg-gardening-white-100 transform ${
              index % 2 === 0 ? "-rotate-12" : "rotate-12"
            } rounded-lg`}
          >
            <div
              className={`w-[80%] h-[40%] my-[10%] flex items-center justify-center ${item.color}`}
            >
              <item.icon className="text-3xl sm:text-5xl text-white" />
            </div>
            <p className={`${item.styles}`}>{item.value}</p>
          </div>
        ))}
      </div>

      <p className="w-4/5 sm:w-3/5 m-0 text-lg sm:text-xl text-center text-gardening-white-100">
        As a community service-based organization, Gardening Club is comprised
        of students passionate about seeing sustainable initiatives on our
        campus and in our communities. We raise awareness about local
        sustainable food systems and environmental justice while empowering
        students to take collaborative action!
        <br /> <br />
        Everyone is welcome and please connect to receive updates about our
        events!
      </p>
    </div>
  );
};

export default Values;
