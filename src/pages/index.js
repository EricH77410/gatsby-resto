import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner, BannerButton } from '../utils'
import QuickInfo from '../components/HomePage/QuickInfo'
import Gallery from '../components/HomePage/Gallery'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader>
      <Banner title="votre restaurant" subtitle="55 rue de Meaux - 77410 Fresnes sur marne">
        <BannerButton style={{margin: '2rem auto'}}>menu</BannerButton>
      </Banner>      
    </HomeHeader>
    <QuickInfo />
    <Gallery />
  </Layout>
)


export default IndexPage
