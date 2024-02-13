import { IoIosCheckmarkCircle } from "react-icons/io";

export const Poll = ({
  title,
  allVotes,
  totalVotes,
  name,
  id,
  cast,
  setContent,
}) => {
  // console.log(cast);
  const percent =
    totalVotes !== 0 ? Math.round((allVotes / totalVotes) * 100) : 0;
  // console.log(title);
  return (
    <label
      htmlFor={title}
      className="cursor-pointer relative flex bg-[#000] w-full py-3 rounded-[10px] pr-6 mt-4 gap-3 items-center"
    >
      <div
        className="absolute h-full w-[75%] py-7 bg-purple-900 rounded-[10px]"
        style={{ width: `${percent}%` }}
      >
      </div>
      <div className="w-full flex justify-between">
        <span className="text-white font-bold z-50 ml-6">{title}</span>
        <span className="text-white font-bold z-50">{percent}%</span>
      </div>
      {cast && (
        <input
          type="radio"
          name={name}
          id={title}
          className="cursor-pointer w-6"
          onChange={() =>
            setContent((prev) => ({
              ...prev,
              content: title,
            }))
          }
        />
      )}
    </label>
  );
};
