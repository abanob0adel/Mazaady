import { Audio } from "react-loader-spinner";
export default function Loading() {
  return (
    <div className="bg-white z-[9999] h-screen w-full flex items-center justify-center">
      <Audio
        height="80"
        width="80"
        color="#FF951D"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
}
