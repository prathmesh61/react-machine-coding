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
    <div className="flex flex-col justify-center gap-5 h-screen">
      <h1 className="font-mono font-bold text-3xl mb-20">
        React Frontend Machine coding round Question
      </h1>
      <h2 className="font-extrabold text-2xl bg-blue-300 p-3 rounded-lg">
        Accordian component
      </h2>
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
