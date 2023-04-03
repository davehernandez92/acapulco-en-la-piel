import dynamic from "next/dynamic"
import Head from "next/head"
import Footer from "./footer"
import Navbar from "./navbar"



export default function Layout({children, title = ''}) {
  return (
    <>
    <Head>
        <title>{`Acapulco en la Piel - ${title}`}</title> 
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar/>
    
    {children}

    <Footer/>
    </>
  )
}
