import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="error-container">
          <h2>Oops... The Page does not exist!!</h2>
          <Link to="/" className="btn">
            Home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
