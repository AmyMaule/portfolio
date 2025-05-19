import { useState, useEffect } from "react";

const Navbar = () => {
  const [mobile, setMobile] = useState<boolean>(window.innerWidth <= 350);

  useEffect(() => {
    let frameId: number;

    const handleResize = () => {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        setMobile(window.innerWidth <= 350);
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  const scrollTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  }

  return (
    <>
      <nav className="navbar-container">
        <a href="#" onClick={scrollTop} className="navbar-title-link">
          <h1 className="navbar-title">Amy Maule</h1>
        </a>
        <div className="navbar-links">
          <a href="#portfolio" className="navbar-link">Portfolio</a>
          <a href="#about" className="navbar-link">{mobile ? "About" : "About me"}</a>
          <a href="#contact" className="navbar-link">Contact</a>
        </div>
      </nav>
      <div className="navbar-height" />
    </>
  )
}

export default Navbar;
