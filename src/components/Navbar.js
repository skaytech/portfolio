import React from "react"
import logo from "../assets/logo.svg"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"

const query = graphql`
  {
    file(relativePath: { eq: "logo1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Navbar = ({ toggleSidebar }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Image fluid={fluid} />
          {/* <img src="../../assets/logo1.png" alt="logo" /> */}
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
