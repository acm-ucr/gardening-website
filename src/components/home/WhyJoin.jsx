const StatCard = ({ value, label }) => {
  return (
    <div className="w-[28.76%] pt-3 pb-2 flex flex-col items-center justify-center rounded-[60px] border-gardening-yellow-200 border-4 bg-gardening-tan-100">
      <span className="text-4xl md:text-5xl lg:text-7xl font-bold text-gardening-yellow-200">
        {value}
      </span>
      <span className="text-md md:text-xl lg:text-3xl font-semibold text-gardening-yellow-200">
        {label}
      </span>
    </div>
  );
};

const WhyJoin = () => {
  return (
    <div className="w-full flex flex-col items-center bg-gardening-yellow-100 border-y-8 border-gardening-yellow-200">
      <p className="text-4xl sm:text-5xl font-bold text-center text-gardening-tan-100 my-12">
        Why Join?
      </p>

      <div className="w-5/6 flex justify-between mb-10">
        <StatCard value="100+" label="Workshops" />
        <StatCard value="200+" label="Members" />
        <StatCard value="50+" label="Alumni" />
      </div>
    </div>
  );
};

export default WhyJoin;
