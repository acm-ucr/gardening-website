const Join = () => {
  // return <div>Join</div>;
  return (
    <div className="w-full flex flex-col items-center border-gardening-yellow-200 border-y-8 border-opacity-80 bg-gardening-yellow-100">
      <div className="text-5xl font-bold text-center text-gardening-white-100 mt-12 mb-12">
        Why Join?
      </div>

      <div className="w-5/6 flex justify-between mb-10">
        {/* workshops */}
        <div className="w-1/6 flex flex-col items-center rounded-full border-gardening-yellow-200 border-t-4 border-r-4 border-l-4 border-b-4 bg-gardening-white-100">
          <div className="text-5xl font-bold text-gardening-yellow-200 mt-4">
            100+
          </div>

          <div className="text-2xl font-medium text-gardening-yellow-200 mb-4">
            Workshops
          </div>
        </div>

        {/* members */}

        <div className="w-1/6 flex flex-col items-center rounded-full border-gardening-yellow-200 border-t-4 border-r-4 border-l-4 border-b-4 bg-gardening-white-100">
          <div className="text-5xl font-bold text-gardening-yellow-200 mt-4">
            200+
          </div>

          <div className="text-2xl font-medium text-gardening-yellow-200 mb-4">
            Members
          </div>
        </div>

        {/* alumnis */}

        <div className="w-1/6 flex flex-col items-center rounded-full border-gardening-yellow-200 border-t-4 border-r-4 border-l-4 border-b-4 bg-gardening-white-100">
          <div className="text-5xl font-bold text-gardening-yellow-200 mt-4">
            50+
          </div>

          <div className="text-2xl font-medium text-gardening-yellow-200 mb-4">
            Alumnis
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
