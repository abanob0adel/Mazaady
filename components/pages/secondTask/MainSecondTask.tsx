import MainCard from "./MainCard";
import QrCard from "./QrCard";
import UserCard from "./UserCard";

export default function MainSecondTask() {
  return (
    <>
      <div className="container py-8">
        <div className="flex justify-between items-start gap-4 flex-col lg:flex-row">
          <div className="lg:w-[30%] w-full flex flex-col gap-4">
            <UserCard />
            <QrCard />
          </div>
          <div className="lg:w-[68%] w-full">
            <MainCard />
          </div>
        </div>
      </div>
    </>
  );
}
