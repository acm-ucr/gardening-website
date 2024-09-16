import React from "react";

const Directions = () => {
  return (
    <div className="py-14 flex flex-col justify-center items-center bg-gardening-brown-200">
      <div className="text-white font-extrabold md:text-5xl text-3xl">
        How to get to Our Garden
      </div>
      <div className="h-96 w-[85%] bg-gardening-tan-200 my-[2%] border-4 border-gardening-brown-100 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6617.658188690455!2d-117.33475700000001!3d33.971232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcae4883c6d7df%3A0x6ffa41f79b1eac12!2sUCR%20Community%20Garden!5e0!3m2!1sen!2sus!4v1726383223050!5m2!1sen!2sus"
          width="100%"
          height="100%"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Directions;
