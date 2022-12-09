import React, { useEffect, useState } from 'react';
import { Col, Row, Progress, Modal, notification } from 'antd'
import {
  HeartFilled
} from '@ant-design/icons';
import questionsList from './questions.json';
import { useLocation, useNavigate } from 'react-router-dom'
import * as nearAPI from "near-api-js"
import { connectionConfig, walletAddress, title } from '../../configs';

const BN = require("bn.js");

const JigsawIndex = () => {
  const navigate = useNavigate()
  const search = useLocation().search;
  const success = new URLSearchParams(search).get('account_id');

  const [showWin, setShowWin] = useState(false)
  const [isModalOpenInit, setIsModalOpenInit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [lives, setLives] = useState(3);


  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleCancelInit = () => {
    setIsModalOpenInit(false);
  };

  const handleCancelWin = () => {
    setShowWin(false)
  }

  const onFinish = () => {
    setIsModalOpen(false)
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

  const NEARLogin = async () => {
    const { connect, WalletConnection } = nearAPI;
    // connect to NEAR
    const nearConnection = await connect(connectionConfig);
    // create wallet connection
    const walletConnection = new WalletConnection(nearConnection, null);
    walletConnection.requestSignIn(
      walletAddress, // contract requesting access
      title, // optional title
      `${window.location}?account_id=true`, // optional redirect URL on success
      `${window.location}` // optional redirect URL on failure
    );
  };

  useEffect(() => {
    if (success !== undefined && success !== null && success.length > 0) {
      setIsModalOpenInit(false)
      onFinish()
    } else {
      setIsModalOpenInit(true)
    }
    // if (account_id === null) {
    //   setIsModalOpen(true)
    // } else {
    //   setIsModalOpen(false)
    // }

  }, [success])

  useEffect(() => {
    if (lives === 0) {
      notification.error({
        message: 'Life line Exhausted',
        description:
          'Game over! 🥹 ',
      });
      setTimeout(() => {
        setIsModalOpen(true)
      }, 200);
    }
  }, [lives])


  useEffect(() => {
    if (count === 9) {
      notification.success({
        message: 'Way to go champ!',
        description:
          'Great way to end the game! 👍 . Your Anchor NFT Will be Airdropped to your wallet.',
      });
      setTimeout(() => {
        setShowWin(true)
      }, 200);
      mintNFT()
    }
  }, [count])

  return (
    <div className='jigsaw'>
      <h4>Jigsaw</h4>


      <div className="jigsaw-holder">
        <Row gutter={16}>
          <Col lg={12}>
            <div className="img-holder">
              <div className="puzzle-layers">
                <img src={`${process.env.PUBLIC_URL}/img/anchorjigsaw.png`} className="puzzle-image" alt="Jigsaw puzzle" />
                <div className="puzzle">
                  {[...Array(12).keys()].map(
                    (item, i) => <div key={`jgswp-${i}`} className="puzzle-piece" id={`puzzle-piece-${i}`}></div>
                  )}</div>
              </div>
            </div>
          </Col>
          <Col lg={12}>
            <div className="top-holder">
              <div className="lives">
                {
                  [...Array(lives).keys()].map((item) => (
                    <HeartFilled />
                  ))
                }
              </div>

              <div className="scoreholder">
                <span>
                  {count}
                </span>
              </div>
            </div>

            <div className="question-holder">
              {
                lives && count < 9 &&
                <>
                  <p className='ques'>{`${count + 1})`} {questionsList[count].text}</p>

                  <div className="options-holder">
                    <Row gutter={32}>
                      {questionsList[count].answers.map(
                        (answer, i) =>
                          <Col lg={12}>
                            <div className="option-item"
                              onClick={() => {
                                if (questionsList[count].correct === i) {
                                  setCount(count + 1);
                                  document.querySelector(
                                    `#puzzle-piece-${count}`
                                  ).classList.add(
                                    'puzzle-piece--solved',
                                  );
                                } else {
                                  setLives(lives - 1);
                                }
                              }
                              }
                            >
                              <span className="letter">
                                {
                                  i === 0 ?
                                    'A' :
                                    i === 1 ?
                                      'B' :
                                      i === 2 ?
                                        'C' :
                                        i === 3 ?
                                          'D' : ''
                                }
                              </span>
                              <p className="answer">
                                {answer}
                              </p>
                            </div>
                          </Col>
                      )}
                    </Row>
                  </div>
                </>
              }


              <div className="progress-holder">
                <Progress percent={(count / 9) * 100} showInfo={false} strokeColor={'#6DD574'} />
              </div>
            </div>
          </Col>
        </Row>
      </div>


      <Modal
        title={null}
        open={isModalOpenInit}
        onOk={handleCancelInit}
        onCancel={handleCancelInit}
        footer={null}
        closable={false}
        maskClosable={false}
        centered={true}
        className="win-modal"
      >
        <h3>
          Welcome 🚀,
        </h3>

        <p>
          Kindly connect your wallet to begin the game
        </p>

        <div className='action-holder'>
          <p className='action-btn'
            onClick={() => { NEARLogin() }}
          >
            Connect Near Wallet
          </p>
        </div>
      </Modal>


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
        <h3>
          Better Luck Next Time
        </h3>

        <p>
          You can do better!
        </p>

        <div className='action-holder'>
          <p className='action-btn'
            onClick={() => {
              navigate('/jigsaw')
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
        <h3>
          You Win!
        </h3>

        <p>
          You’ve shown good knowledge of variables! You’ve unlocked the next level!
        </p>

        <div className='action-holder'>
          <p className='action-btn'
            onClick={() => {
              navigate('/jigsaw')
            }}
          >
            Restart Game
          </p>
        </div>
      </Modal>
    </div>
  )
}

export default JigsawIndex