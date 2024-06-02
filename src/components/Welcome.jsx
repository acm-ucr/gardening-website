const Welcome = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-[#F6F4F3]  flex flex-col">
      <p className="text-black text-lg pt-5 pl-5">UCR Gardening Club</p>
      <p className="text-[#4E74E4] text-[200px] ml-5 font-['pd'] leading-tight">
        Newcomers <br /> Welcome!
      </p>
      <div className="w-full flex align-items-right">
        <div className="w-1/2" />

        <div className="w-1/2">
          <p className="w-1/2 text-sm">
            {
              "WELCOME TO THE UCR GARDENING CLUB WEBSITE. IF YOU'RE LOOKING AT THIS BEFORE OUR FIRST MEETING, GOOD JOB! THIS IS WHAT WE'LL BE WORKING ON FOR THE NEXT 10 WEEKS"
            }
            <br /> <br />
            {
              "OUR FIRST MEETING WILL BE SOMETIME IN THE WEEK AFTER FINALS, AND WE WILL GO OVER HOW TO SET UP THE REPOSITORY, CLONE TO VSCODE, AND THE BASICS OF REACT AND HOW TO MAKE COMPONENTS. LOOKING FORWARD TO WORKING WITH EVERYONE!"
            }
          </p>
          <div className="h-96 w-1/2 bg-[#AD947A]" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
