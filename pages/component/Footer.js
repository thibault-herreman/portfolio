
export default function Footer() {
  return (
    <footer className="footer">

        <div className="container">

            <div className="footer__colG is-noMobile">

                <p className="footer__name">Thibault HERREMAN</p>

                <p className="footer__desc">Développeur Full Stack React / Node.js</p>

            </div>

            <ul className="footer__contact">

                <li>Me contacter</li>

                <li><span className="effetCt"><span className="effet effet--type1"><i className="icon-mobile"></i></span> 06 70 48 69 26</span></li>

                <li><a href="mailto:thibault.herreman@gmail.com" className="effetCt"><span className="effet effet--type1"><i className="icon-mail1"></i></span> <span className="effet__txt">thibault.herreman@gmail.com</span></a></li>

                <li><a rel="noreferrer" href="https://www.linkedin.com/in/thibault-herreman/" target="_blank" className="effetCt"><span className="effet effet--type1"><i className="icon-linkedin1"></i></span> <span className="effet__txt">Mon linkedin</span></a></li>

                <li><a rel="noreferrer" href="https://drive.google.com/file/d/1tcnuIQgq68GrKFfb7Mtqtz0kQmBJkK7R/view?usp=sharing" target="_blank" className="effetCt"><span className="effet effet--type1"><i className="icon-upload2"></i></span> <span className="effet__txt">Télécharger mon CV</span></a></li>

            </ul>

        </div>

    </footer>

  )
}
