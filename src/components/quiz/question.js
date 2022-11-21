import React, { useState } from 'react'
import { Radio, Space } from 'antd'

const Question = ({ questionDetail, updateAnswerSupplied }) => {
  const [selectedValue, setSelectedValue] = useState(undefined)

  const onChange = (e) => {
    updateAnswerSupplied(e.target.value)
    setSelectedValue(e.target.value)
  }

  return (
    <div className='question-holder'>
      <p className="question">
        {questionDetail.question}
      </p>

      <div>
        <Radio.Group onChange={onChange} value={selectedValue}>
          <Space direction="vertical">
            <Radio value={'a'}>
              <span className={`
              ${selectedValue !== undefined ?
                  questionDetail.answer === 'a' ?
                    'right-answer' : ''
                  :
                  ''
                }
                ${selectedValue !== undefined ?
                  selectedValue === 'a' ?
                    questionDetail.answer !== 'a' ?
                      'wrong-answer' : ''
                    : '' :
                  ''
                }
                `}>
                {questionDetail.optionA}
              </span>
            </Radio>
            <Radio value={'b'}>
              <span className={`
              ${selectedValue !== undefined ?
                  questionDetail.answer === 'b' ?
                    'right-answer' : ''
                  :
                  ''
                }
                ${selectedValue !== undefined ?
                  selectedValue === 'b' ?
                    questionDetail.answer !== 'b' ?
                      'wrong-answer' : ''
                    : '' :
                  ''
                }
                `}>
                {questionDetail.optionB}
              </span>
            </Radio>
            <Radio value={'c'}>
              <span className={`
              ${selectedValue !== undefined ?
                  questionDetail.answer === 'c' ?
                    'right-answer' : ''
                  :
                  ''
                }
                ${selectedValue !== undefined ?
                  selectedValue === 'c' ?
                    questionDetail.answer !== 'c' ?
                      'wrong-answer' : ''
                    : '' :
                  ''
                }
                `}>
                {questionDetail.optionC}
              </span>
            </Radio>
            <Radio value={'d'}>
              <span className={`
              ${selectedValue !== undefined ?
                  questionDetail.answer === 'd' ?
                    'right-answer' : ''
                  :
                  ''
                }
                ${selectedValue !== undefined ?
                  selectedValue === 'd' ?
                    questionDetail.answer !== 'd' ?
                      'wrong-answer' : ''
                    : '' :
                  ''
                }
                `}>
                {questionDetail.optionD}
              </span>
            </Radio>
          </Space>
        </Radio.Group>
      </div>
    </div>
  )
}

export default Question