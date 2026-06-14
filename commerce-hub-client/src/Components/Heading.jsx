const Heading = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <p className="text-sm uppercase tracking-wider">{subtitle}</p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#233238] font-normal">{title}</h2>
    </div>
  );
};

export default Heading;
