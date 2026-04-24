import React from 'react'
import './globals.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MessageFrom from '../components/MessageFrom'
import Mission from '../components/Mission'
import Project from '../components/Project'
import Team from '../components/Team'
import Gallery from '../components/Gallery'
import NewsBlog from '../components/NewsBlog'
import ContactForm from '../components/ContactForm'
import FAQSection from '../components/Faq'
import BottomSlogan from '../components/BottomSlogan'
import Footer from '../components/Footer'
export default function App () {
  return (
      <div>
         <Navbar />
       <div className='mt-20'>
        <Hero></Hero>
        <MessageFrom></MessageFrom>
        <Mission></Mission> 
        <Project></Project>
        <Team></Team>
        <Gallery></Gallery>
        <NewsBlog></NewsBlog>
        <ContactForm></ContactForm>
        <FAQSection></FAQSection>
        <BottomSlogan></BottomSlogan>
        <Footer></Footer>
       </div>
      </div>
  )
}