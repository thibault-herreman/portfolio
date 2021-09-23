import Head from 'next/head'

export default function HeadComponent(props) {

    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />

            <meta name="robots" content="index, follow" />

            <meta property="og:title" content="Thibault Herreman - Développeur Full Stack React / Node.js" />

            <meta property="og:type" content="website" />

            <meta property="og:local" content="fr_FR" />

            <meta property="og:description" content="Développeur Full Stack React / Node.js Web et Mobile" />

            <meta property="og:url" content="https://portfolio-thibault-herreman.vercel.app/" />

            <meta property="og:site_name" content="Portfolio de Thibault Herreman" />

            <meta property="og:image" content="https://portfolio-thibault-herreman.vercel.app/images/thibault-herreman.png" />

            <meta property="og:image:type" content="image/jpeg" />

            <meta property="og:image:width" content="320" />

            <meta property="og:image:height" content="326" />

            <meta property="og:image:alt" content="Thibault Herreman" />

            <meta name="twitter:card" content="summary" />

            <meta name="twitter:site" content="https://portfolio-thibault-herreman.vercel.app/" />

            <meta name="twitter:title" content="Thibault Herreman - Développeur Full Stack React / Node.js" />

            <meta name="twitter:description" content="Portfolio de Thibault Herreman, Développeur Full Stack React / Node.js Web et Mobile" />

            <meta name="twitter:image" content="https://portfolio-thibault-herreman.vercel.app/images/thibault-herreman.png" />

        </Head>
    )
}