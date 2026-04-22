import React from 'react'
import './globals.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MessageFrom from '../components/MessageFrom'
export default function App () {
  return (
      <div>
         <Navbar />
       <div className='mt-20'>
        <Hero></Hero>
        <MessageFrom></MessageFrom>
       </div>
      </div>
  )
}