const Header = (props) => {
  const { title, subtitle } = props.headerData;
  return (
    <header
      style={{ backgroundColor: "#ebeaea", padding: "20px" }}
      id="header-wrapper"
    >
      <h1 style={{ fontSize: "35px" }}>{title}</h1>
      <h2 style={{ fontSize: "25px", fontFamily: "Verdana, sans-serif" }}>
        {subtitle}
      </h2>
    </header>
  );
};

export default Header;
