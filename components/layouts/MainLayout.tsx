import { FC } from 'react';

import Head from 'next/head';

import Navbar from "../Navbar";
import styles from './MainLayout.module.css';

//se puede importar PropsWithChildren desde react y pasar las props vacias o con algo
interface DarkLayoutProps {
    children: JSX.Element | JSX.Element[];
}

const MainLayout: FC<DarkLayoutProps> = ({ children }) => {
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