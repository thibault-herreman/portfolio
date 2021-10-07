import Link from 'next/link';
import { Link as Linkto, animateScroll as scroll } from "react-scroll";
import { useState } from 'react';

export default function Header(props) {

    let activeHp;
    props.hp ? 
        activeHp = <li className='header__ong active'><span className="noLink">Accueil</span></li> : 
        activeHp = <li className='header__ong'><Link href="/">Accueil</Link></li>;
    let activeProjets;
    props.projets ? 
        activeProjets = <li className='header__ong active'><span className="noLink">Projets</span></li> : 
        activeProjets = <li className='header__ong'><Link href="/projets">Projets</Link></li>;
        
    const [isMenuMobile, setIsMenuMobile] = useState(false);

    const handleClickMenu = () => {
        setIsMenuMobile(!isMenuMobile);
    }

    return (
        <header className="header">

            <div className="header__ct">

                <div className="header__pres" itemScope itemType="http://schema.org/LocalBusiness">

                    <h1 className="is-marginNone">

                        <span className="header__name" itemProp="name">Thibault HERREMAN</span>

                        <span className="header__fonction">Développeur Full Stack React / Node.js</span>

                    </h1>

                    <meta itemProp="description" content="Développeur Full Stack React / Node.js" />

                    <meta itemProp="areaServed" content="Ile de France" />

                    <meta itemProp="image" content="https://thibault-herreman.com/images/thibault-herreman.png" />

                    <meta itemProp="email" content="thibault.herreman@gmail.com" />

                    <meta itemProp="employee" content="Thibault Herreman" />

                    <meta itemProp="telephone" content="06 70 48 69 26" />

                    <meta itemProp="sameAs" content="https://www.linkedin.com/in/thibault-herreman/" />

                    <div className={`header__menuIcon ${isMenuMobile ? 'toMenuOpen' : ''}`} onClick={handleClickMenu}>

                        <div className="header__menuIconCt">

                            <span className="header__barMenu"></span>

                            <span className="header__barMenu"></span>

                            <span className="header__barMenu"></span>

                        </div>

                    </div>

                </div>

                <nav className={`header__nav ${isMenuMobile ? 'header__menuOpen' : ''}`}>

                    <ul className="header__navContents">
                        {activeHp}
                        {activeProjets}
                        <li className="header__ong">
                            <Linkto 
                                to="footer"
                                smooth={true}
                                duration={1000}
                            >
                                Contact
                            </Linkto>
                        </li>
                    </ul>

                </nav>

            </div>

        </header>
    )
}
