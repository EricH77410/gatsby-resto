import React, { Component } from 'react'
import {Section, Title, SectionButton} from '../../utils'
import styled from 'styled-components'
import {styles} from '../../utils'
import { Link } from 'gatsby'

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title title="Notre Restaurant" sub="vous allez découvrir"/>
        <QuickInfoWapper>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque corporis officia est quidem aspernatur aperiam adipisci quaerat optio iste voluptatibus quis velit dignissimos repudiandae nostrum beatae doloremque iusto, enim et maiores. Dicta natus sint pariatur placeat repellendus doloribus fugiat facilis tempore odit eveniet aliquam obcaecati quas at adipisci, officiis quod! 
          </p>
          <Link to="/about" style={{textDecoration: 'none'}}>
            <SectionButton style={{margin: '2rem auto'}}>en savoir plus</SectionButton>
          </Link>
        </QuickInfoWapper>
        
      </Section>
    )
  }
}

const QuickInfoWapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    word-spacing: 0.2rem;
    color: ${styles.colors.mainGrey};
  }

  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`


