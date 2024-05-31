const Home = () => {
  return (
    <div className="h-screen w-screen bg-[#F6F4F3] overflow-hidden">
      <p className="text-black text-lg p-5">UCR Gardening Club</p>
      <p className="text-[#4E74E4] text-[200px] mt-10 ml-5 font-['pd']">
        Members
      </p>
      <p className="text-[#4E74E4] text-[200px] mt-10 ml-5 -mt-16 font-['pd']">
        Club
      </p>
      <p className="w-[25%] absolute right-[30%] bottom-10 text-sm">
        {
          "WELCOME TO THE UCR GARDENING CLUB WEBSITE. IF YOU'RE LOOKING AT THIS BEFORE OUR FIRST MEETING, GOOD JOB! THIS IS WHAT WE'LL BE WORKING ON FOR THE NEXT 10 WEEKS"
        }
        <br /> <br />
        {
          "OUR FIRST MEETING WILL BE SOMETIME IN THE WEEK AFTER FINALS, AND WE WILL GO OVER HOW TO SET UP THE REPOSITORY, CLONE TO VSCODE, AND THE BASICS OF REACT AND HOW TO MAKE COMPONENTS. LOOKING FORWARD TO WORKING WITH EVERYONE!"
        }
      </p>
      <div className="bg-[#AD947A] h-20 w-2/5 relative left-[45%] top-20" />
    </div>
  );
};

export default Home;
