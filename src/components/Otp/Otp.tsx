import OtpInput from "./OtpInput/OtpInput";

const Otp = () => {
  return (
    <div className="flex flex-col justify-center gap-10 h-screen">
      <h1 className="font-mono text-2xl bg-blue-400 h-10">Enter Opt</h1>
      <OtpInput length={4} />
    </div>
  );
};

export default Otp;
