import React from 'react'
import first1 from "../assets/first1.png"; // Dog image

const Home = () => {
  return (
    <div className="content-wrapper">
    <div className="slider-tip"></div>
    <div className="dog-section-updated">
      <img src={first1} alt="Dog" className="dog-image-updated" />
      <div className="dog-history-updated">
        <h3 className="history-heading">History of</h3>
        <h2 className="dog-name-updated">Alabay</h2>
        <p className="right-text">
          The Central Asian Shepherd Dog, also known as Alabay, has been a
          guardian of livestock and property for centuries. Originating
          from Central Asia, these dogs are renowned for their courage,
          strength, and loyalty.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Home
