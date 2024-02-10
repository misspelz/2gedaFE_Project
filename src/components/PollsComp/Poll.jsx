import { IoIosCheckmarkCircle } from "react-icons/io";

export const Poll = ({ title, allVotes, totalVotes }) => {
  const percent = totalVotes !== 0 ? Math.round((allVotes / totalVotes) * 100) : 0;

  // console.log(percent);
  return (
    <div className="relative flex justify-between bg-[#000] w-full py-3 rounded-[10px] pr-6 mt-4 cursor-pointer ">
      <div
        className="absolute top-0 w-[75%] py-7 bg-purple-900 rounded-[10px]"
        style={{ width: `${percent}%` }}
      >
        {percent === 100 && (
          <IoIosCheckmarkCircle
            className="text-green-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            size={20}
          />
        )}
      </div>
      <span className="text-white font-bold z-50 ml-6">{title}</span>
      <span className="text-white font-bold z-50">{percent}%</span>
    </div>
  );
};
