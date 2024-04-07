import UserCard from "./UserCard";

export default function MainSecondTask() {
  return (
    <>
      <div className="container py-8">
        <div className="flex justify-between items-start gap-4 flex-col lg:flex-row">
          <div className="lg:w-[30%] w-full flex flex-col gap-4">
            <UserCard />
          </div>
          <div className="lg:w-[68%] w-full"></div>
        </div>
      </div>
    </>
  );
}
