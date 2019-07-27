import React from 'react'
import Layout from '../components/layout'
import {PageHeader, Banner} from '../utils'
import img from '../images/bcg/aboutBcg.jpeg'

const AboutPage = () => {
  return (
    <Layout>
      <PageHeader img={img}>
        <Banner title="a propos" subtitle="notre histoire..."/>
      </PageHeader>
    </Layout>
  )
}

export default AboutPage
