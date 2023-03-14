import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Banner from '../components/Banner'
import DevelopersCard from '../components/DevelopersCard'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar/>
        <main>
          <Banner/>
          <DevelopersCard/>
          <Projects/>
          <Skills/>
          <About/>
        </main>
        <footer>
          <Footer/>
        </footer>
      </header>
    </div>
  )
}

export default Home
