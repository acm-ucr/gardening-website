const WhyJoin = () => {
  // return <div>Join</div>;
  return (
    <div className="w-full flex flex-col items-center bg-gardening-yellow-100 border-y-8 border-gardening-yellow-200">
      <p className="text-5xl font-bold text-center text-gardening-tan-100 my-12">
        Why Join?
      </p>

      <div className="w-5/6 flex justify-between mb-10">
        <div className="w-1/6 flex flex-col items-center justify-center rounded-full border-gardening-yellow-200 border-4 bg-gardening-tan-100 py-4">
          <p className="text-5xl font-bold text-gardening-yellow-200">100+</p>

          <p className="text-2xl font-medium text-gardening-yellow-200">
            Workshops
          </p>
        </div>

        <div className="w-1/6 flex flex-col items-center justify-center rounded-full border-gardening-yellow-200 border-4 bg-gardening-tan-100 py-4">
          <p className="text-5xl font-bold text-gardening-yellow-200">200+</p>

          <p className="text-2xl font-medium text-gardening-yellow-200">
            Members
          </p>
        </div>

        <div className="w-1/6 flex flex-col items-center justify-center rounded-full border-gardening-yellow-200 border-4 bg-gardening-tan-100 py-4">
          <p className="text-5xl font-bold text-gardening-yellow-200">50+</p>

          <p className="text-2xl font-medium text-gardening-yellow-200">
            Alumnis
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyJoin;
