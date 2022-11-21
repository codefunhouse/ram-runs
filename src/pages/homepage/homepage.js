import React, { useState, useEffect } from 'react'
import Dolphin from '../../components/dolphin/dolphin'
import Obstacle from '../../components/obstacle/obstacle'
import axios from 'axios'
import * as nearAPI from "near-api-js"
import { message, Modal } from 'antd'
import { updateGameStart, updateGameThinking } from '../../core/game'
import Quiz from '../../components/quiz/quiz'
import { nanoid } from 'nanoid'
import { connectionConfig, walletAddress, title } from "../../configs";
import { useLocation } from 'react-router-dom'

const Homepage = () => {
  // const { user } = gameObj.use()
  const search = useLocation().search;
  const success = new URLSearchParams(search).get('account_id');


  const [bottomPosition, setBottomPosition] = useState(20)
  const [leftPosition, seTleftPosition] = useState(0)
  const [loadingQuestions, setLoadingQuestions] = useState(false)
  const [quizQuestions, setQuizQuestions] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);



  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = () => {
    // updateUser({
    //   ...values
    // })
    updateGameStart(true)
    setIsModalOpen(false)
  }



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


  const getQuiz = async () => {
    setLoadingQuestions(true)
    try {
      const res = await axios.get(`https://codefunhouse.com/api/v1/tests/6059e5b98ef15f4ed97bf1af/questions
      `, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_QUIZAPI_KEY}`
        }
      })

      const { data } = res.data
      setQuizQuestions(data.slice(0, 4))
      setLoadingQuestions(false)
    } catch (error) {
      setLoadingQuestions(false)
      message.error('Something went wrong')
    }
  }

  const jumpCorrectly = () => {
    setBottomPosition(30)
    seTleftPosition(leftPosition + 22)
    setBottomPosition(20)
    updateGameThinking(true)
  }

  const jumpInCorrectly = () => {
    setBottomPosition(30)
    seTleftPosition(leftPosition + 15)
    setBottomPosition(20)
    updateGameThinking(false)
    updateGameStart(false)
  }

  useEffect(() => {
    getQuiz()

  }, [])


  useEffect(() => {
    if (success !== undefined && success !== null && success.length > 0) {
      setIsModalOpen(false)
      onFinish()
    } else {
      setIsModalOpen(true)
    }
    // if (account_id === null) {
    //   setIsModalOpen(true)
    // } else {
    //   setIsModalOpen(false)
    // }

  }, [success])

  return (
    <div className='homepage'>
      {
        !isModalOpen &&
        <Quiz
          loadingQuestions={loadingQuestions}
          quizQuestions={quizQuestions}
          jumpCorrectly={jumpCorrectly}
          jumpInCorrectly={jumpInCorrectly}
        />
      }

      <Dolphin
        style={{
          bottom: bottomPosition + '%',
          left: leftPosition + '%',
        }}
      />

      {
        [1, 3, 5, 7].map((item, index) => (
          <Obstacle
            key={nanoid()}
            style={{
              'bottom': 10 + '%',
              'left': 7 * item + (index * 8) + '%'
            }}
          />
        ))
      }

      <Modal
        title={null}
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
    </div>
  )
}

export default Homepage
