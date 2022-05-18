import Head from 'next/head'
import Navbar from "../Navbar";
import styles from './MainLayout.module.css'

const MainLayout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home de Mia</title>
                <meta name="description" content="Home Page de Mia" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className={styles.main}>

                {children}

            </main>

        </div>
    )
}

export default MainLayout