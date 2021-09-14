import Link from 'next/link'
import Header from './component/Header'
import Footer from './component/Footer'

export default function Projets() {
    return (
        <>
            <Header projets={true} />
            <h1>Mes projets</h1>
            <Link href="/">Back to home</Link>
            <Footer />
        </>
    )
}