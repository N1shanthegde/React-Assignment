// import React from 'react'

import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="flex justify-center">
      <p>info@mcqquestions.net. All right Reserved |
      <Link to="/" className="text-blue-700"> About Us </Link> | 
      <Link to="/" className="text-blue-700"> Contact Us </Link> |
      <Link to="/" className="text-blue-700">  Terms & Conditions </Link> |
      <Link to="/" className="text-blue-700"> Disclaimer </Link> |
      <Link to="/" className="text-blue-700"> Privacy Policy </Link></p>
    </div>
  )
}

export default Footer
