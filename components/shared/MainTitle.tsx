interface TitleType {
  title: string;
}

const MainTitle: React.FC<TitleType> = ({ title }) => {
  return (
    <h2 className="text-[#000] font-[700] lg:text-[24px] text-[18px]">
      {title}
    </h2>
  );
};
export default MainTitle;
