import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from './component/Header'
import Footer from './component/Footer'

export default function Home() {
  return (
    <>
      <Head>
          <title>Thibault Herreman - Développeur Full Stack React / Node.js</title>
          <meta name="description" content="Page d'accueil du site de Thibault Herreman - Développeur Full Stack React / Node.js" />
      </Head>
      <Header hp={true} />
      <div className="container is-marginT30">
        <div className="is-flex">

          <div>
            <Image 
              alt="Thibault Herreman"
              src="/images/thibault-herreman.png"
              width={320}
              height={326}
            />
          </div>

          <div className="is-marginL20 is-font16">

              <p className="is-marginT10 is-marginB0">Après <b>10 ans</b> en tant qu’intégrateur Web j’ai voulu monter en compétence en <b>JavaScript</b>.</p>
              <p className="is-marginT20 is-marginB0">Je me suis donc inscrit à une <b>formation intensive format Bootcamp</b> de 10 semaines à la Capsule : <b>Développeur Full Stack Web et Mobile</b>.</p>
              <p className="is-marginT20 is-marginB0">Cette formation est diplomante d&apos;un <b>titre RNCP de niveau 6</b> (Bac +3/4) que j&apos;ai obtenu</p>
              <p className="is-marginT20 is-marginB0">Fort de ces nouvelles compétences je désire pleinement les mettre au service d&apos;une entreprise !</p>
              <p className="is-marginT20 is-marginB0">J&apos;aime et j&apos;ai besoin de travailler en équipe afin de partager les connaissances et d&apos;<b>évoluer en permanence</b>.</p>
              <p className="is-marginT20 is-marginB0">Je m’intègre facilement et suis rapidement <b>autonome</b>.</p>

              <p className="noHesit">Alors n&apos;hésitez pas à me contacter !</p>

          </div>

        </div>
     
        <p className="comp__title">Mes compétences :</p>

        <div className="is-flex is-justifyContentSB">

          <ul className="comp__list">
              <li className="comp__subtitle">Front-end</li>
              <li>JavaScript Vanilla</li>
              <li>React / React Native</li>
              <li>HTML5 et CSS3 et Sass</li>
          </ul>

          <ul className="comp__list">
              <li className="comp__subtitle">Back-end et BDD</li>
              <li>Node.js / Express</li>
              <li>MongoDB / Mongoose</li>
              <li>PHP / MySQL</li>
          </ul>

          <ul className="comp__list">
              <li className="comp__subtitle">Optimisation, SEO</li>
              <li>Minification, bundle.js</li>
              <li>Structures sémantique HTML5</li>
              <li>Rich snippets, outliner, sens de lecture</li>
          </ul>

          <ul className="comp__list">
              <li className="comp__subtitle">Outils</li>
              <li>GIT et SVN</li>
              <li>Méthode Agile</li>
              <li>Bootstrap, Ant Design</li>
          </ul>

        </div>
        
      </div>
      <Footer />
    </>
  )
}
