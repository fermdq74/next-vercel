import Head from "next/head"
import { Inter } from 'next/font/google'
import { Navbar } from "../Navbar"
import Link from "next/link"
import styles from "./MainLayout.module.css"

const inter = Inter({ subsets: ['latin'] })

export const MainLayout = ( {children}) => {
    return (
        <>
          <Head>
            <title>Next App - Home</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          
          <Navbar></Navbar>
    
          <main className={`${styles.main} ${inter.className}`}>
    
          { children }
    
          </main>
        </>
      )
}