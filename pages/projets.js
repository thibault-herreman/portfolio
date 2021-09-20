import HeadComponent from './component/HeadComponent'
import Image from 'next/image'
import Header from './component/Header'
import Footer from './component/Footer'

export default function Projets() {
    return (
        <>
            <HeadComponent 
                title="Projets de Thibault Herreman - Développeur Full Stack React / Node.js"
                description="Page qui présente les projets de Thibault Herreman"
            />
        
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

                            <a href="https://mymoviz-thibault-herreman.herokuapp.com/" rel="noreferrer" target="_blank">

                                <Image 
                                    alt="MyMoviz"
                                    src="/images/mymoviz.png"
                                    width={400}
                                    height={195}
                                />

                                <div className="listReferences__overlay"></div>

                                <p className="listReferences__desc">MyMoviz : React, Express, api TMDB</p>

                                <p className="listReferences__voir">Voir le projet sur Heroku</p>

                            </a>

                        </li>

                        <li className="listReferences__block">

                            <a href="https://mymoviz-thibault-herreman.herokuapp.com/" rel="noreferrer" target="_blank">

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

                            <a href="https://mymoviz-thibault-herreman.herokuapp.com/" rel="noreferrer" target="_blank">

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