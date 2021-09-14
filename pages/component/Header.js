import Link from 'next/link'

export default function Header(props) {

    let activeHp;
    props.hp ? activeHp = 'header__ong active' : activeHp = 'header__ong';
    let activeProjets;
    props.projets ? activeProjets = 'header__ong active' : activeProjets = 'header__ong';

    return (
        <header className="header">

            <div className="container is-flexEnd is-justifyContentSB">

                <div itemScope itemType="http://schema.org/LocalBusiness">

                    <h1 className="is-marginNone">

                        <span className="header__name" itemProp="name">Thibault HERREMAN</span>

                        <span className="header__fonction">Développeur Full Stack React / Node.js</span>

                    </h1>

                    <meta itemProp="description" content="Développeur Full Stack React / Node.js" />

                    <meta itemProp="areaServed" content="Ile de France" />

                    <meta itemProp="image" content="/images/thibault-herreman.png" />

                    <meta itemProp="email" content="thibault.herreman@gmail.com" />

                    <meta itemProp="employee" content="Thibault Herreman" />

                    <meta itemProp="telephone" content="06 70 48 69 26" />

                    <meta itemProp="sameAs" content="https://www.linkedin.com/in/thibault-herreman/" />

                    <a href="#" className="header__menuIcon jqOpenNav">

                        <div className="header__menuIconCt">

                            <span className="header__barMenu"></span>

                            <span className="header__barMenu"></span>

                            <span className="header__barMenu"></span>

                        </div>

                    </a>

                </div>

                <nav className="header__nav">

                    <ul className="header__navContents">

                        <li className={activeHp}><Link href="/"><i className="icon-home3"></i></Link></li>

                        <li className={activeProjets}><Link href="/projets">Projets</Link></li>

                        <li className="header__ong"><Link href="#" data-ancre="footer">Contact</Link></li>

                    </ul>

                </nav>

            </div>

        </header>
    )
}
