import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { Section, Title, SectionButton } from '../../utils'
import styled from 'styled-components'
import Product from './Product'

const PRODUCTS = graphql`
{
  products:allContentfulMenu{
    edges{
      node{
        id
        name
        ingredients
        price
        image{
          fixed(width:150, height:150){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`
const Menu = () => {
  return (
    <Section>
      <Title title="Produits mis en avant" sub="plein de gout"/>
      <ProductList>
        <StaticQuery
          query={PRODUCTS}
          render={ data => {
            const products = data.products.edges
            return products.map(item => {
              return <Product key={item.node.id} product={item.node}/>
            })
          }}
        />
      </ProductList>
    </Section>
  )
}

const ProductList = styled.div`
margin: 3rem 0;
display: grid;
grid-template-columns: 100%;
grid-row-gap: 3rem;

@media (min-width: 576px) {
  grid-template-columns: 95%;  
}
@media (min-width: 768px) {
  grid-template-columns: 80%;
  justify-content: center;  
}
@media (min-width: 992px) {
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;  
}
`

export default Menu
