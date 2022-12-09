import { Col, Row } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landingpage = () => {
  const navigate = useNavigate()

  return (
    <div className='landingpage'>
      <nav>
        <Row justify="space-between">
          <Col>
            <div className="logo-holder">
              <img src={`/logo/logo.png`} alt="logo" />
            </div>
          </Col>
          <Col
          >
            <Row>
              <Col>
                <p className="navlink"
                  onClick={() => {
                    navigate('/learn')
                  }}
                >
                  Learn
                </p>
              </Col>
              <Col>
                <p className="navlink"
                  onClick={() => {
                    navigate('/flippydolphin')
                  }}
                >
                  Play Flippydolphin
                </p>
              </Col>
              <Col>
                <p className="navlink"
                  onClick={() => {
                    navigate('/jigsaw')
                  }}
                >
                  Play Code Jigsaw
                </p>
              </Col>
              <Col>
                <p className="navlink"
                  onClick={() => {
                    window.location.assign('https://codefunhouse.com/')
                  }}
                >
                  CodeFunhouse
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </nav>

      <div className="banner">
        <Row>
          <Col lg={12} md={24} xs={24}>
            <p className='new-feature'>
              New Feature
            </p>


            <h1>
              <span className='layer-one'>
                Level Up !
              </span>
            </h1>
            <h1>
              <span className='layer-two'>
                with
              </span>
              <span className='layer-three'>
                Ram Runs
              </span>
            </h1>

            <p className="info-text">
              Fun mini games built to keep you on your toes and teach you the rules of programming. Win amazing rewards and even NFT tokens!
            </p>

            <p className='action-btn'
              onClick={() => {
                navigate('/flippydolphin')
              }}
            >
              Try it out!
            </p>
          </Col>

          <Col lg={12} md={24} xs={24}>
            <div className="img-holder">
              <img src={`/img/pictures.png`} alt="logo" />
            </div>
          </Col>
        </Row>
      </div>


      {/* <div className="chooserun">
        <h1>
          Choose your Run
        </h1>
      </div> */}

      <footer>
        <Row justify="space-between">
          <Col>
            <p className="navlink"
              onClick={() => {
                navigate('/learn')
              }}
            >
              Copyright © 2022 Code Funhouse. All Rights Reserved.
            </p>
          </Col>
          <Col
          >
            <Row>
              <Col>
                <a className="navlink"
                  rel="noreferrer"
                  target="_blank"
                  href='https://codefunhouse.com/about'
                >
                  About Us
                </a>
              </Col>
              <Col>
                <a className="navlink"
                  rel="noreferrer"
                  target="_blank"
                  href='https://newaccount1622789710745.freshdesk.com/support/home'
                >
                  Contact Us
                </a>
              </Col>
              <Col>
                <a className="navlink"
                  rel="noreferrer"
                  target="_blank"
                  href='https://community.codefunhouse.com/'
                >
                  Community
                </a>
              </Col>
              <Col>
                <a className="navlink"
                  rel="noreferrer"
                  target="_blank"
                  href='https://newaccount1622789710745.freshdesk.com/support/home'
                >
                  FAQ
                </a>
              </Col>
              <Col>
                <a className="navlink"
                  rel="noreferrer"
                  href='https://codefunhouse.com/terms'
                >
                  Terms of Use
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </footer>
    </div>
  )
}

export default Landingpage
