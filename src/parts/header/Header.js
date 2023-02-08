const Header = (props) => {
  const { title, subtitle } = props.headerData;
  return (
    <header
      style={{ marginTop: "20px", backgroundColor: "#ebeaea", padding: "20px" }}
      className="header-wrapper"
    >
      <h1 style={{ fontSize: "45px" }}>{title}</h1>
      <h2 style={{ fontSize: "35px" }}>{subtitle}</h2>
    </header>
  );
};

export default Header;
