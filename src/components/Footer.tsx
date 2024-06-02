const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
    <div className="footer-copyright">
      <span className="copyright-symbol">&copy;</span>
      Amy Maule {currentYear}
    </div>
    </footer>
  )
}

export default Footer;
