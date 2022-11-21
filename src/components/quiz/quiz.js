import { Card, Col, Row, Tag, Carousel, Modal, notification } from 'antd'
import React, { useEffect, useState, useRef } from 'react'
import Skeletonloader from '../skelentonloader/skelentonloader'
import useTimer from 'easytimer-react-hook';
import Question from './question';
import { updateGameThinking } from '../../core/game';
import { useNavigate } from 'react-router-dom';
const BN = require("bn.js");


const Quiz = ({ loadingQuestions, quizQuestions, jumpInCorrectly, jumpCorrectly }) => {
  const [timer] = useTimer({
    countdown: true,
    startValues: [0, 0, 1, 0, 0]
  });
  const sliderRef = useRef(null)
  const navigate = useNavigate()

  const [currentQuestion, setCurrentQuestion] = useState(0)
  // const [answerSupplied, setAnswerSupplied] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showWin, setShowWin] = useState(false)

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleCancelWin = () => {
    setShowWin(false)
  }
  
  const mintNFT = async () => {
    try {
      await window.contract.nft_mint(
        {
          token_id: `${window.accountId}-go-team-token`,
          metadata: {
            title: "Codefunhouse Anchor Badge NFT",
            description: "Congratulations on completing the game :)",
            media:
              "https://gateway.pinata.cloud/ipfs/QmXWzHihk3QXMpJsXeoST2ZJM6bMXqRHNRotnaPcaD6hqs",
          },
          receiver_id: window.accountId,
        },
        300000000000000, // attached GAS (optional)
        new BN("1000000000000000000000000")
      );
    } catch (error) {
      console.log(error)
    }
  };
  

  const nextSlide = (value) => {
    const getCurrrentAnswer = quizQuestions[currentQuestion].answer

    if (getCurrrentAnswer === value) {
      if (quizQuestions.length - 1 === currentQuestion) {
        notification.success({
          message: ' Way to go champ!',
          description:
            'Great way to end the game! 👍 . Your Anchor NFT Will be Airdropped to your wallet.',
        });
        jumpCorrectly()
        setTimeout(() => {
          setShowWin(true)
        }, 200);
        mintNFT()
      } else {
        sliderRef.current.next()
        notification.success({
          message: 'Correct Answer',
          description:
            'Ready to jump above the obstacle! 👍',
        });
        jumpCorrectly()
      }
    } else {
      notification.error({
        message: 'Wrong Answer',
        description:
          'Crashing into obstacle! 🥹 ',
      });
      jumpInCorrectly()
      setTimeout(() => {
        setIsModalOpen(true)
      }, 200);
    }
  }


  const updateAnswerSupplied = (value) => {
    // setAnswerSupplied(value)
    setTimeout(() => {
      nextSlide(value)
    }, 500);
  }

  const onChange = (currentSlide) => {
    setCurrentQuestion(currentSlide);
  };

  // const prevSlide = () => {
  //   sliderRef.current.prev()
  // }

  useEffect(() => {
    if (quizQuestions.length) {
      timer.reset()
      setTimeout(() => {
        updateGameThinking(true)
      }, 200);
    }

    // eslint-disable-next-line
  }, [quizQuestions])

  useEffect(() => {
    timer.reset()
    // setAnswerSupplied(null)

    // eslint-disable-next-line
  }, [currentQuestion])


  useEffect(() => {
    if (timer.getTimeValues().toString() === '00:00:00') {
      notification.error({
        message: 'Times Up',
        description:
          'Crashing into obstacle! 🥹 ',
      });
      jumpInCorrectly()
      setTimeout(() => {
        setIsModalOpen(true)
      }, 200);
    }

    // eslint-disable-next-line
  }, [timer.getTimeValues().toString()])


  useEffect(() => {
    if (showWin) {
      timer.pause()
      setIsModalOpen(false)
    }

    // eslint-disable-next-line
  }, [showWin])




  return (
    <div className='quiz'>
      <Row>
        <Col lg={12} xs={24} md={24}>
          <Card bordered={false} hoverable>
            <div className='top-info'>
              <h3>
                Code Funhouse Game Quiz
              </h3>

              {
                !loadingQuestions && <h3>
                  {currentQuestion + 1} / {quizQuestions.length}
                </h3>
              }
            </div>

            <p className='time-limit'>
              <b> Time limit for this question 1 minute
              </b>
              <Tag color="purple">{timer.getTimeValues().toString()}</Tag>
            </p>

            {
              loadingQuestions ?
                <Skeletonloader
                  height={200}
                />
                :
                <div>
                  <Carousel
                    afterChange={onChange}
                    dots={false}
                    ref={sliderRef}
                  >
                    {
                      quizQuestions.map((item) => (
                        <>
                          <Question
                            key={item._id}
                            questionDetail={item}
                            updateAnswerSupplied={updateAnswerSupplied}
                          // answerSupplied={answerSupplied}
                          />
                        </>
                      ))
                    }
                  </Carousel>

                  <div className="actions">
                    <div>
                      {/* <Button
                        disabled={
                          currentQuestion === 0 ?
                            true : false
                        }
                        onClick={() => {
                          prevSlide()
                        }}
                      >
                        Previous
                      </Button> */}
                      {/* <Button
                        onClick={() => {
                          nextSlide()
                        }}
                        disabled={
                          answerSupplied === null ? true :
                            quizQuestions.length - 1 === currentQuestion ?
                              true : false
                        }
                      >
                        Next
                      </Button> */}
                    </div>

                    <div>
                      {/* {

                        quizQuestions.length - 1 === currentQuestion &&
                        <Button
                          type='primary'
                          onClick={() => {
                            nextSlide()
                          }}
                        >
                          Submit
                        </Button>
                      } */}
                    </div>
                  </div>
                </div>
            }
          </Card>
        </Col>
      </Row>

      <Modal
        open={isModalOpen}
        onOk={handleCancel}
        onCancel={handleCancel}
        footer={null}
        closable={false}
        maskClosable={false}
        centered={true}
        className="win-modal"
      >
        <div className='img-holder'>
          <img
            src={
              '/img/block.png'
            }
            alt="block"
            className='no-margin'
          />
        </div>

        <h3>
          Better Luck Next Time
        </h3>

        <p>
          That obstacle was a bit too big. You can do better!
        </p>

        <div className='action-holder'>
          <p className='action-btn'
            onClick={() => {
              navigate('/flippydolphin')
            }}
          >
            Try Again
          </p>
        </div>
      </Modal>

      <Modal
        open={showWin}
        onOk={handleCancelWin}
        onCancel={handleCancelWin}
        footer={null}
        closable={false}
        maskClosable={false}
        centered={true}
        className="win-modal"
      >
        <div className='img-holder'>
          <img
            src={
              '/assets/flipping/Flippy Dolphin 1.png'
            }
            alt="dolpin"
          />
        </div>

        <h3>
          You Win!
        </h3>

        <p>
          You’ve shown good knowledge of variables! You’ve unlocked the next level!
        </p>

        <div className='action-holder'>
          <p className='action-btn'
            onClick={() => {
              navigate('/flippydolphin')
            }}
          >
            Restart Game
          </p>
        </div>
      </Modal>
    </div>
  )
}

export default Quiz
