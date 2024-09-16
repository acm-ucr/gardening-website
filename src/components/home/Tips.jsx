import Image from "next/image";
import working from "@/public/working.webp";

const Tips = () => {
  return (
    <div className="py-10 flex flex-col items-center sm:justify-around sm:flex-row">
      <div className="w-4/5 sm:w-[45%]">
        <div className="w-[80%] mx-auto aspect-square rounded-lg border-[3px] border-gardening-brown-100 bg-gardening-tan-200 overflow-hidden">
          <Image
            src={working}
            alt="Students gardening"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-4/5 sm:w-[55%] mt-4 sm:mt-0 flex flex-col">
        <div className="w-[80%] mx-auto">
          <p className="mt-4 text-[5vw] sm:text-[4vw] font-bold">
            Some Gardening Tips
          </p>
          <p className="m-0 text-[3vw] sm:text-[2vw] lg:text-[1.6vw] font-semibold">
            <b>1. Start Small:</b> Begin with easy plants like herbs or tomatoes
            to learn the basics.
            <br />
            <b>2. Know Your Soil:</b> Test soil pH, add compost, and improve
            soil health for better plant growth.
            <br />
            <b>3. Water Wisely:</b> Water roots in the morning or late afternoon
            to reduce evaporation.
            <br />
            <b>4. Sunlight Matters:</b> Ensure plants get 6-8 hours of sunlight
            daily; choose sunny spots for planting.
            <br />
            <b>5. Rotate Your Crops:</b> Change planting locations yearly to
            prevent soil depletion and reduce pests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tips;
