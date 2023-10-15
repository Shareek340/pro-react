import React from 'react'
import Contactpage from './Contactpage'
import MainLayout from '../components/MainLayout'
import Address from './Address'
import ContactForm from './ContactForm'

function Homecontact() {
  return (
    <div>
        <Contactpage/>
        <Address/>
        <ContactForm/>
        <MainLayout/>
    </div>
  )
}

export default Homecontact