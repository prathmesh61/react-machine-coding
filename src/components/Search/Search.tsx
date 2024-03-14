import { useState } from "react";
import { debounce } from "../Debounce/debounce";

type TArray = {
  color: string;
  value: string;
}[];
const Search = () => {
  const [value, setValue] = useState<string>("");
  const array: TArray = [
    {
      color: "red",
      value: "#f00",
    },
    {
      color: "green",
      value: "#0f0",
    },
    {
      color: "blue",
      value: "#93C5FD",
    },
    {
      color: "cyan",
      value: "#0ff",
    },
    {
      color: "magenta",
      value: "#f0f",
    },
    {
      color: "yellow",
      value: "#ff0",
    },
    {
      color: "black",
      value: "#000",
    },
  ];
  const debounceVal = debounce(value, 500);
  return (
    <div className="flex flex-col gap-5">
      <div className="w-[500px]  border-gray-300 border-2 outline-none rounded-lg py-1 px-4">
        <input
          type="text"
          className="border-none outline-none w-full text-black placeholder:text-gray-400"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="max-w-[600px] flex flex-wrap gap-8">
        {array
          .filter((item) =>
            item.color
              .toLocaleLowerCase()
              .includes(debounceVal.toLocaleLowerCase())
          )
          .map((item) => (
            <div key={item.value}>{item.color}</div>
          ))}
      </div>
    </div>
  );
};

export default Search;
