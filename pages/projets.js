import Header from './component/Header'
import Image from 'next/image'
import Footer from './component/Footer'

export default function Projets() {
    return (
        <>
            <Header projets={true} />

            <div className="container">

                <h2 className="titreType1 is-marginT30 is-marginB0">Mes projets</h2>

                <div className="listReferences">
                    <ul className="listReferences__ct">

                        <li className="listReferences__block">

                            <a href="https://www.youtube.com/watch?v=ZqeLx0lgoVU&ab_channel=ThibaultHerreman" rel="noreferrer" target="_blank">

                                <Image 
                                    alt="Klean"
                                    src="/images/klean.png"
                                    width={400}
                                    height={195}
                                />

                                <div className="listReferences__overlay"></div>

                                <p className="listReferences__desc">Klean : React Native / Express</p>

                                <p className="listReferences__voir">Voir la vidéo démo</p>
                            </a>

                        </li>

                        <li className="listReferences__block">

                            <a href="https://www.magasin-lsa.fr/" rel="noreferrer" target="_blank">

                                <Image 
                                    alt="Bikeshop"
                                    src="/images/bikeshop.png"
                                    width={400}
                                    height={195}
                                />

                                <div className="listReferences__overlay"></div>

                                <p className="listReferences__desc">Bikeshop : Express, Stripe, Bootstrap</p>

                                <p className="listReferences__voir">Voir le projet sur Heroku</p>

                            </a>

                        </li>

                        <li className="listReferences__block">

                            <a href="https://www.magasin-lsa.fr/" rel="noreferrer" target="_blank">

                                <Image 
                                    alt="Bikeshop"
                                    src="/images/bikeshop.png"
                                    width={400}
                                    height={195}
                                />

                                <div className="listReferences__overlay"></div>

                                <p className="listReferences__desc">Bikeshop : Express, Stripe, Bootstrap</p>

                                <p className="listReferences__voir">Voir le projet sur Heroku</p>
                                
                            </a>

                        </li>

                        <li className="listReferences__block">

                            <a href="https://www.magasin-lsa.fr/" rel="noreferrer" target="_blank">

                                <Image 
                                    alt="Bikeshop"
                                    src="/images/bikeshop.png"
                                    width={400}
                                    height={195}
                                />

                                <div className="listReferences__overlay"></div>

                                <p className="listReferences__desc">Bikeshop : Express, Stripe, Bootstrap</p>

                                <p className="listReferences__voir">Voir le projet sur Heroku</p>
                                
                            </a>

                        </li>

                    </ul>
                </div>

            </div>
     
            <Footer />
        </>
    )
}