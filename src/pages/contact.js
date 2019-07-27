import React from 'react'
import Layout from '../components/layout'
import {PageHeader, Banner} from '../utils'
import img from '../images/bcg/contactBcg.jpeg'

const ContactPage = () => {
  return (
    <Layout>
      <PageHeader img={img}>
        <Banner title="Nous contacter" subtitle="réservation etc..."/>
      </PageHeader>
      
    </Layout>
  )
}

export default ContactPage
