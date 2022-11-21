import './App.css';
import React, { useEffect, useState } from 'react';
import questionsList from './questions.json';
import * as nearAPI from "near-api-js"
import { Modal, notification } from 'antd'
import { connectionConfig, walletAddress, title } from '../../configs';
import { useLocation, useNavigate } from 'react-router-dom'
// import useTimer from 'easytimer-react-hook';
const BN = require("bn.js");


const Jigsaw = () => {
  const navigate = useNavigate()
  const search = useLocation().search;
  const success = new URLSearchParams(search).get('account_id');
  // const [timer] = useTimer({
  //   countdown: true,
  //   startValues: [0, 0, 1, 0, 0]
  // });

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
    <div className="puzzle-wrapper">
      <div className="puzzle-score">
        <div>{[...Array(3).keys()].map(
          (item) => <span className="puzzle-life">♥</span>
        )}</div>
        <div>{count}</div>
      </div>
      <div className="puzzle-layers">
        <img src={`${process.env.PUBLIC_URL}/img/anchorjigsaw.png`} className="puzzle-image" alt="Jigsaw puzzle" />
        <div className="puzzle">
          {[...Array(9).keys()].map(
            (item, i) => <div key={`jgswp-${i}`} className="puzzle-piece" id={`puzzle-piece-${i}`}></div>
          )}</div>
      </div>
      <div className>
        {lives && count < 9 && (
          <div className="question-wrapper">

            <p>{`${count + 1}) `}{questionsList[count].text}</p>
            <ol className='answers'>
              {questionsList[count].answers.map(
                (answer, i) => <li key={`jgswa-${i}`}>
                  <button onClick={() => {
                    if (questionsList[count].correct === i) {
                      setCount(count + 1);
                      document.querySelector(
                        `#puzzle-piece-${count}`
                      ).classList.add(
                        'puzzle-piece--solved',
                      );
                    } else {
                      setLives(lives - 1);
                      document.querySelector(
                        `.puzzle-life`
                      ).remove();
                    }
                  }
                  }>{answer}</button></li>
              )}
            </ol>
          </div>
        )}
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
  );
}

export default Jigsaw;