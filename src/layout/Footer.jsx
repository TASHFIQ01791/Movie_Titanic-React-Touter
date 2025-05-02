import "../layout/Footer.css";
export const Footer = () => {
  return (
    <footer className="section-footer">
      <div className="footer-container">
        <div className="footer-text">
          &copy; {new Date().getFullYear()} Titanic Movie. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
