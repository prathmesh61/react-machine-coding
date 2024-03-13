import { useState } from "react";
type TArray = {
  id: number;
  title: string;
  desc: string;
}[];
const Accordion = () => {
  const [index, setIndex] = useState(1);
  const arr: TArray = [
    {
      id: 1,
      title: "title",
      desc: "description-1",
    },
    {
      id: 2,
      title: "title",
      desc: "description-2",
    },
    {
      id: 3,
      title: "title",
      desc: "description-3",
    },
    {
      id: 4,
      title: "title",
      desc: "description-4",
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-extrabold text-2xl bg-blue-300 p-3 rounded-lg">
        Accordian component
      </h1>
      {arr.map((item) => (
        <div className="flex flex-col gap-2 items-start" key={item.id}>
          <h2
            className="font-bold text-xl cursor-pointer"
            onClick={() => setIndex(item.id)}
          >
            {item.title}
          </h2>
          <span
            className={
              item.id === index ? "flex bg-green-300 p-2 rounded-md" : "hidden"
            }
          >
            {item.desc}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
