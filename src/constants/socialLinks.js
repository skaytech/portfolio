import React from "react"
import { FaGithub, FaLinkedin, FaTwitterSquare, FaDev } from "react-icons/fa"
import { SiHashnode } from "react-icons/si"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/kshivkumar",
  },
  {
    id: 2,

    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/skaytech",
  },
  {
    id: 3,
    icon: <SiHashnode className="social-icon"></SiHashnode>,
    url: "https://blog.skay.dev/",
  },
  {
    id: 4,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/skay_tech",
  },
  {
    id: 5,
    icon: <FaDev className="social-icon"></FaDev>,
    url: "https://dev.to/skaytech",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
