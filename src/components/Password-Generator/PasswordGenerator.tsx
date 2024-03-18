import { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState<string>("");
  const [passwordLength, setPasswordLength] = useState<number>(10);
  const [upperCase, setUpperCase] = useState<boolean>(false);
  const [lowerCase, setLowerCase] = useState<boolean>(false);

  const [number, setNumber] = useState<boolean>(false);

  const genratePasswordFun = async () => {
    let upperStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerStr = "abcdefghijklmnopqrstuvwxyz";
    let num = "1234567890";
    let validPass: string = "";
    if (upperCase) {
      validPass += upperStr;
    }
    if (lowerCase) {
      validPass += lowerStr;
    }
    if (number) {
      validPass += num;
    }
    let genratedPass: string = "";
    for (let index = 0; index <= passwordLength; index++) {
      let randomIndex = Math.floor(Math.random() * validPass.length + 1);
      genratedPass += validPass[randomIndex];
    }

    setPassword(genratedPass);
  };

  return (
    <div className="flex flex-col justify-center gap-10 h-screen">
      <h1 className="font-extrabold text-2xl bg-blue-300 p-3 rounded-lg">
        Password Generator component
      </h1>
      <div className="flex gap-4 outline-none ">
        <input
          type="text"
          className="w-[300px] px-2 outline-none border-2 text-black border-gray-300 rounded-md placeholder:text-gray-400"
          placeholder="password"
          defaultValue={password}
        />
        <button className="w-fit p-2 rounded-md bg-black text-white">
          copy
        </button>
      </div>
      <div className="flex flex-col items-start justify-start gap-2 ">
        <div className="flex justify-center items-center gap-1">
          <input type="checkbox" onChange={() => setUpperCase(!upperCase)} />
          <label>include Uppercase Letter</label>
        </div>
        <div className="flex justify-center items-center gap-1">
          <input type="checkbox" onChange={() => setLowerCase(!lowerCase)} />
          <label>include Lowercase Letter</label>
        </div>

        <div className="flex justify-center items-center gap-1">
          <input type="checkbox" onChange={() => setNumber(!number)} />
          <label>include numbers</label>
        </div>
        <button
          className="w-fit p-2 rounded-md bg-black text-white mt-5"
          onClick={genratePasswordFun}
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
