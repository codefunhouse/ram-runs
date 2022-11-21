import React, { useState, useEffect } from 'react'
import Dolphin from '../../components/dolphin/dolphin'
import Obstacle from '../../components/obstacle/obstacle'
// import axios from 'axios'
import * as nearAPI from "near-api-js"
import {  Modal } from 'antd'
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
      // const res = await axios.get(`https://codefunhouse.com/api/v1/tests/6059e5b98ef15f4ed97bf1af/questions
      // `, {
      //   headers: {
      //     'Authorization': `Bearer ${process.env.REACT_APP_QUIZAPI_KEY}`
      //   }
      // })

      // const { data } = res.data
      const data = [
        {
          "_id": "606dee2ab872f30bc0730a33",
          "question": "What is syntax in python?",
          "optionA": "Syntax is the rules of the programming language ",
          "optionB": " It is used to read information ",
          "optionC": "It is used to output information",
          "optionD": "Syntax is the word used to describe a computer error",
          "answer": "a",
          "point": 2,
          "testId": "6059e5b98ef15f4ed97bf1af"
        },
        {
          "_id": "606defdcb872f30bc0730a34",
          "question": "What correct code in python will display - Hello World",
          "optionA": "Print(\"Hello World\")",
          "optionB": "print(\"Hello World\")",
          "optionC": "print(Hello World)",
          "optionD": "print=(\"hello world\")",
          "answer": "b",
          "point": 2,
          "testId": "6059e5b98ef15f4ed97bf1af"
        },
        {
          "_id": "606df194b872f30bc0730a35",
          "question": "What symbol do you use to make a comment in Python?",
          "optionA": "@",
          "optionB": "¬",
          "optionC": ";",
          "optionD": "#",
          "answer": "d",
          "point": 2,
          "testId": "6059e5b98ef15f4ed97bf1af"
        },
        {
          "_id": "606df1dbb872f30bc0730a36",
          "question": "What would be displayed if you did run this code in python:print(10*3)",
          "optionA": "3",
          "optionB": "10",
          "optionC": "13",
          "optionD": "30",
          "answer": "d",
          "point": 2,
          "testId": "6059e5b98ef15f4ed97bf1af"
        },
        {
          "_id": "606df267b872f30bc0730a38",
          "question": "What is a variable?",
          "optionA": "a value",
          "optionB": "a number",
          "optionC": "a letter",
          "optionD": "a named memory location where you store a value",
          "answer": "d",
          "point": 2,
          "testId": "6059e5b98ef15f4ed97bf1af"
        },
        {
          "_id": "606df2a8b872f30bc0730a39",
          "question": "Which of the following is NOT a suitable variable name in python?",
          "optionA": "num1 =",
          "optionB": "My name is =",
          "optionC": "Num1 =",
          "optionD": "MyName =",
          "answer": "b",
          "point": 2,
          "testId": "6059e5b98ef15f4ed97bf1af"
        },
        {
          "_id": "606df38db872f30bc0730a3b",
          "question": "What are the three programming constructs?",
          "optionA": "Accuracy, Algorithms, Decomposition",
          "optionB": "Python, HTML, Java",
          "optionC": "Sequence, Selection, Iteration",
          "optionD": "Abstraction, Modulation, Pattern Recognition",
          "answer": "c",
          "point": 2,
          "testId": "6059e5b98ef15f4ed97bf1af"
        },
        {
          "_id": "62c866b307d93455d591172a",
          "question": "If you print (10/5) in Python, what will the result show?",
          "optionA": "2.0",
          "optionB": "5.0",
          "optionC": "50",
          "optionD": "15",
          "answer": "a",
          "point": 2,
          "testId": "6059e5b98ef15f4ed97bf1af"
        },
        {
          "_id": "62c8677907d93455d591172b",
          "question": "What data type is a  word e.g. \"yes\"",
          "optionA": "String",
          "optionB": "Boolean",
          "optionC": "Float",
          "optionD": "Integer",
          "answer": "a",
          "point": 2,
          "testId": "6059e5b98ef15f4ed97bf1af"
        },
        {
          "_id": "62c86c8a07d93455d5911735",
          "question": "Which code below will assign the value 12 to a dog's age.",
          "optionA": "dog_age == 12",
          "optionB": "dog's age is 12",
          "optionC": "12 = dog_age",
          "optionD": "dog_age = 12",
          "answer": "d",
          "point": 2,
          "testId": "6059e5b98ef15f4ed97bf1af"
        },
        {
          "_id": "62c86cea07d93455d5911736",
          "question": "Which code will store the value \"Abenna\" to a first name?",
          "optionA": "first_name == Abenna",
          "optionB": "first_name = \"Abenna\"",
          "optionC": "first_name = Abenna",
          "optionD": "Abenna = first_name",
          "answer": "b",
          "point": 2,
          "testId": "6059e5b98ef15f4ed97bf1af"
        },
        {
          "_id": "62c86d5607d93455d5911737",
          "question": "Which code below will print the variable first_name previously created?",
          "optionA": "print(\"first_name\")",
          "optionB": "print(first_name)",
          "optionC": "print(firstName)",
          "optionD": "Print(first_name)",
          "answer": "b",
          "point": 2,
          "testId": "6059e5b98ef15f4ed97bf1af"
        },
        {
          "_id": "62c86d9407d93455d5911738",
          "question": "What data type is the number 3.5?",
          "optionA": "String",
          "optionB": "Boolean",
          "optionC": "Integer",
          "optionD": "Float",
          "answer": "d",
          "point": 2,
          "testId": "6059e5b98ef15f4ed97bf1af"
        },
        {
          "_id": "62c86dcf07d93455d5911739",
          "question": "What data type will the values True or False be stored as in Python?",
          "optionA": "Char",
          "optionB": "Choice",
          "optionC": "String",
          "optionD": "Boolean",
          "answer": "d",
          "point": 2,
          "testId": "6059e5b98ef15f4ed97bf1af"
        },
        {
          "_id": "62c86e1107d93455d591173a",
          "question": "What data type is the following postcode RM2 1RS?",
          "optionA": "Integer",
          "optionB": "String",
          "optionC": "Character",
          "optionD": "Real",
          "answer": "b",
          "point": 2,
          "testId": "6059e5b98ef15f4ed97bf1af"
        },
        {
          "_id": "62c86e8407d93455d591173b",
          "question": "What data type should 3000 be stored as to be treated as whole number by Python?",
          "optionA": "Character",
          "optionB": "String",
          "optionC": "Integer",
          "optionD": "Float",
          "answer": "c",
          "point": 2,
          "testId": "6059e5b98ef15f4ed97bf1af"
        },
        {
          "_id": "62c86f3e07d93455d591173c",
          "question": "Which of these lines of code will cast a string input to an integer input?",
          "optionA": "input(int)",
          "optionB": "(input int)",
          "optionC": "int(input())",
          "optionD": "int(cast string(input)",
          "answer": "c",
          "point": 2,
          "testId": "6059e5b98ef15f4ed97bf1af"
        },
        {
          "_id": "62c86f8607d93455d591173d",
          "question": "What is casting om Python?",
          "optionA": "Converting a variable to a string",
          "optionB": "Converting a string to an if statment",
          "optionC": "Converting a comment to code",
          "optionD": "Converting from one data type to another",
          "answer": "d",
          "point": 2,
          "testId": "6059e5b98ef15f4ed97bf1af"
        },
        {
          "_id": "62c8715607d93455d5911741",
          "question": "What is concatenation is Python?",
          "optionA": "Adding two variables together",
          "optionB": "Adding two integers together",
          "optionC": "Adding two strings together",
          "optionD": "Adding conditionals together",
          "answer": "c",
          "point": 2,
          "testId": "6059e5b98ef15f4ed97bf1af"
        }
      ]

      setQuizQuestions(data.slice(0, 4))
      setLoadingQuestions(false)
    } catch (error) {
      setLoadingQuestions(false)
      // message.error('Something went wrong')
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
