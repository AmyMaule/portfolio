const About = () => {
  return (
    <section className="about-section">
      <h1 className="section-title">About me</h1>
      <div className="about-text-container">
        <p className="about-text">
          I've been building software and developing websites for over 5 years and absolutely love seeing ideas go from concept to production and the creative problem-solving that brings. I'm driven by the impact great software can have, whether it's making someone's workflow smoother, helping a team make better decisions, or just creating a delightfully smooth user experience. I enjoy diving into complex codebases, finding elegant solutions to messy problems and I have always loved a good bug hunt! 🐛
        </p>
        <p className="about-text">
          My project, ImmoBee, helped me find my new house last year and a couple of the projects I built to use myself now have hundreds or low-thousands of monthly users.
        </p>
        <p className="about-text">
          I'm currently looking for a new full time opportunity, and in the mean time I'm doing some freelance web development, volunteering as a React developer for an organization researching whole brain emulation and conducting interviews for the Recurse Center, a wonderful programming retreat where curious programmers come together to become dramatically better in a short space of time.
        </p>
        <div className="rc-container">
          <div className="rc-scout-wrapper">
            <div className="rc-scout" data-scout-rendered="true">
              <p className="rc-scout__text">
                <i className="rc-scout__logo"></i> 
                Want to become a better programmer? 
                <a className="rc-scout__link" href="https://www.recurse.com/scout/click?t=ed79fc3c9fec27f08f003d7d7145e717">
                Join the Recurse Center!
                </a>
              </p>
            </div>
          </div>
        </div>

        <p className="about-text">
          In my free time, you'll find me baking cakes, rollerblading, and obsessing over my cats:
        </p>
        <div className="about-img-container">
          <div className="about-img-row">
            <img src="images/wedding-cake.jpg" className="about-img" />
            <img src="images/flower-cake.jpg" className="about-img" />
            <img src="images/rollerblading.png" className="about-img" />
          </div>
          <div className="about-img-row">
            <img src="images/cats-1.jpeg" className="about-img" />
            <img src="images/cats-2.jpeg" className="about-img" />
            <img src="images/cats-3.jpeg" className="about-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
