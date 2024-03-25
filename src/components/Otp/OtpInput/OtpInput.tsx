import { useRef, useState } from "react";

type Props = {
  length: number;
};

const OtpInput = ({ length }: Props) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputs = Array.from({ length }, () => useRef<HTMLInputElement>(null));
  console.log(otp);

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    const input = e.target;
    if (input.value.length === 1 && index < length - 1) {
      inputs[index + 1].current?.focus();
    }
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <div className="flex items-center justify-center ">
      {inputs.map((ref, index) => (
        <input
          maxLength={1}
          ref={ref}
          key={index}
          onChange={(e) => handleChange(index, e)}
          className="border-2 border-gray-400 ml-2 w-10"
        />
      ))}
      <div className="font-mono font-bold text-xl bg-green-400 p-2 ml-10">
        OTP: {otp}
      </div>
    </div>
  );
};

export default OtpInput;
