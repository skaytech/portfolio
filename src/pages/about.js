import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"

const About = ({
  data: {
    allStrapiAbout: { nodes },
  },
}) => {
  const {
    title,
    description1,
    description2,
    description3,
    stack,
    image,
  } = nodes[0]
  return (
    <Layout>
      <SEO title="About Me" description="This is the about page" />
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{description1}</p>
            <p>{description2}</p>
            <p>{description3}</p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.name}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        title
        description1
        description2
        description3
        id
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          name
        }
      }
    }
  }
`

export default About
