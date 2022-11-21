import { Col, Row } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landingpage = () => {
  const navigate = useNavigate()

  return (
    <div className='landingpage'>
      <navbar>
        <Row justify="space-between">
          <Col>
            <div className="logo-holder">
              <img src={`/logo/logo.png`} alt="logo" />
            </div>
          </Col>
          <Col>
            <p className="navlink"
              onClick={() => {
                navigate('/flippydolphin')
              }}
            >
              Play Game
            </p>
          </Col>
        </Row>
      </navbar>

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
              Fun mini games built to keep you on your toes and push your learning forward. Win amazing rewards and even NFT tokens!
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
    </div>
  )
}

export default Landingpage