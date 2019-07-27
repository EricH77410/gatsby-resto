import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { StaticQuery, graphql } from 'gatsby'
import { styles, Section } from '../../utils'

const GET_IMAGES = graphql`
{
  getImages:allFile(filter:{relativeDirectory: {eq:"homeGallery"}}){
    edges{
      node{
        childImageSharp{
          fluid(maxWidth:500){
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
}
`

const Gallery = () => {
  return (
    <StaticQuery 
      query={GET_IMAGES} 
      render={data => {
        const images = data.getImages.edges
        return (
          <Section>
            <GalleryWrapper>
              {images.map(({node}, index) => {                
                return (
                  <div key={index} className={`item item${index+1}`}>
                    <Img fluid={node.childImageSharp.fluid}/>
                    <p className="info">Une description du produit</p>
                  </div>
                )
              })}
            </GalleryWrapper>
          </Section>
        )
      } } 
    />    
  )
}

const GalleryWrapper = styled.div`
display: grid;
grid-template-columns: auto;
grid-row-gap: 1rem;
.item {
  position: relative;

}
.info {
  position: absolute;
  top: 0;
  left: 0;
  background: ${styles.colors.mainYellow};
  padding: 0.1rem 0.3rem;
  text-transform: capitalize;
}

@media (min-width: 576px){
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
}
@media (min-width: 768px){
  grid-template-columns: repeat(3 ,1fr);
}
@media (min-width: 992px){
  grid-template-areas: 
  'one one two two'
  'one one three three';
  .gatsby-image-wrapper {
    height: 100%;
  }
  .item1 {
    grid-area: one;
  }
  .item2 {
    grid-area: two;
  }
  .item3 {
    grid-area: three;
  }
}

`

export default Gallery


