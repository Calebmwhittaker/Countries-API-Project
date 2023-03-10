import showDate from "../../utilities/showDate.js";

const Footer = () => {
  return (
    <footer style={{ marginTop: "20px" }} className="footer-wrapper">
      <p>
        Copyright All Rights Reserved {showDate().slice(showDate().length - 4)}
      </p>
    </footer>
  );
};

export default Footer;
