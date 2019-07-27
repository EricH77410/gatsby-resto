import React from 'react'
import Layout from '../components/layout'
import {PageHeader, Banner} from '../utils'
import img from '../images/bcg/menuBcg.jpeg'

const MenuPage = () => {
  return (
    <Layout>
      <PageHeader img={img}>
        <Banner title="Au menu"/>
      </PageHeader>
      
    </Layout>
  )
}

export default MenuPage
