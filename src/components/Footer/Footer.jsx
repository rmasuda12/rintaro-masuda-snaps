import "./Footer.scss";

function Footer() {
    return (
    <>
    <footer className='footer'>
    <section className="footer__details">
    <h1 className='footer__title'>Snaps</h1>

    <article className="footer__links">
        <div className='footer__link-list'>
            <a className="footer__link-item" href="/">For photographers</a>
            <a className="footer__link-item" href="/">Hire Talent</a>
            <a className="footer__link-item" href="/">Inspiration</a>
        </div>

        <div className='footer__link-list'>
          <a className="footer__link-item" href="/">About</a>
          <a className="footer__link-item" href="/">Careers</a>
          <a className="footer__link-item" href="/">Support</a>
        </div>

        <section className='footer__socials--pseudo'>
          <a className="footer__socials-item" href="https://www.facebook.com"><img src='../../src/assets/Icons/Facebook.svg'></img></a>
          <a className="footer__socials-item" href="https://www.facebook.com"><img src='../../src/assets/Icons/X_twitter.svg'></img></a>
          <a className="footer__socials-item" href="https://www.facebook.com"><img src='../../src/assets/Icons/Instagram.svg'></img></a>
          <a className="footer__socials-item" href="https://www.facebook.com"><img src='../../src/assets/Icons/Pinterest.svg'></img></a>
        </section>
    </article>
    </section>

    <section className='footer__socials'>
      <a className="footer__socials-item" href="https://www.facebook.com"><img src='../../src/assets/Icons/Facebook.svg'></img></a>
      <a className="footer__socials-item" href="https://www.facebook.com"><img src='../../src/assets/Icons/X_twitter.svg'></img></a>
      <a className="footer__socials-item" href="https://www.facebook.com"><img src='../../src/assets/Icons/Instagram.svg'></img></a>
      <a className="footer__socials-item" href="https://www.facebook.com"><img src='../../src/assets/Icons/Pinterest.svg'></img></a>
    </section>

    <section className='footer__legals'>
      <a className="footer__legal-item" href="/">© 2024 Snaps</a>
      <a className="footer__legal-item" href="/">. Terms</a>
      <a className="footer__legal-item" href="/">Privacy</a>
      <a className="footer__legal-item" href="/">Cookies</a>
    </section>

  </footer>
  </>
  )
}

export default Footer