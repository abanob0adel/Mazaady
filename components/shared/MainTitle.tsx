interface TitleType {
  title: string;
  size: string;
}

const MainTitle: React.FC<TitleType> = ({ title, size }) => {
  return (
    <h2 className="text-[#000] font-[700]" style={{ fontSize: size + "px" }}>
      {title}
    </h2>
  );
};
export default MainTitle;
