import React, { useState, useEffect } from 'react'
import { Progress, Table } from 'antd'
import { useNavigate } from 'react-router-dom'

const dataSource = [
  {
    operations: '+',
    name: 'Addition',
    example: '15 + 5',
    result: '20'
  },
  {
    operations: '-',
    name: 'Subtraction',
    example: '15 - 5',
    result: '10'
  },
  {
    operations: '*',
    name: 'Multiplication',
    example: '15 * 5',
    result: '75'
  },
  {
    operations: '/',
    name: 'Division',
    example: '15 / 5',
    result: '3'
  },
  {
    operations: '%',
    name: 'Modulus',
    example: '17 % 5',
    result: '2'
  },
  {
    operations: '+',
    name: 'Addition',
    example: '15 + 5',
    result: '20'
  },
  {
    operations: '**',
    name: 'Exponentiation',
    example: '2 ** 3',
    result: '8'
  },
  {
    operations: '//',
    name: 'Floor Division',
    example: '8 // 3',
    result: '2'
  },
]

const columns = [
  {
    title: 'Operators',
    key: 'operations',
    dataIndex: 'operations'
  },
  {
    title: 'Name',
    key: 'name',
    dataIndex: 'name'
  },
  {
    title: 'Example',
    key: 'example',
    dataIndex: 'example'
  },
  {
    title: 'Expected Result',
    key: 'result',
    dataIndex: 'result'
  }
]


const Learn = () => {
  const navigate = useNavigate()

  const [currentStage, setCurrentStage] = useState(1)
  const stages = [
    {
      id: 1,
      title: 'Arithmetic Operators',
    },
    {
      id: 2,
      title: 'Python Comments'
    },
    {
      id: 3,
      title: 'Python Variables',
    },
    {
      id: 4,
      title: 'Python Syntax'
    },
    {
      id: 5,
      title: 'Python Conditions'
    }
  ]

  const gotoNext = () => {
    setCurrentStage(currentStage + 1)
  }


  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

  }, [currentStage])
  

  return (
    <div className='learn'>
      <h1>
        {stages[currentStage].title}
      </h1>

      <div className='learn-main'>
        <div className="progress-holder">
          <Progress percent={(currentStage === 4 ? 5 : currentStage) * 20} showInfo={false} strokeColor={'#6DD574'} />
        </div>

        {
          currentStage === 0 &&
          <div>
            <p className="info">
              <b>Arithmetic Operators </b> are used with numeric values to perform common mathematical operations.
              <br />
              Here are some of the arithmetic operations used in python
            </p>

            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
            />

            <div className="tips">
              <p className="info">
                <b>Hot Tip! </b>
              </p>

              <p className="info">
                The arithmetic operator, “+” can also be used with non-numerical values for something called concatenation. But you’ll learn that later.
              </p>
            </div>

            <div className='action'>
              <p
                onClick={() => {
                  gotoNext()
                }}
              >
                Continue
              </p>
            </div>
          </div>
        }

        {
          currentStage === 1 &&
          <div>
            <p className="info">
              <b>Comments</b>  can be used to <b>explain python code better</b> (especially to people who do noy program).
            </p>

            <p className="info">
              Comments  can be used to <b>make code more readable.</b>
            </p>

            <p className="info">
              Comments  can be used to <b>prevent execution </b> when testin code.
            </p>

            <br />

            <h3>
              Creating A Comment
            </h3>

            <p className="info">
              A comment starts with the hashtag  character <span className='info-tag'>#</span>
            </p>

            <p className="info">
              Python will ignore anything written after
              <span className='info-tag'>#</span>
              on the line of code.
            </p>

            <div className='example-holder'>
              <h3>
                <b>Example</b>
              </h3>

              <img src="/img/code.png" alt="code" />
            </div>

            <p className="info">
              Comments  can even be placed at the end of a line or statement and python will ignore it
            </p>

            <div className='example-holder'>
              <h3>
                <b>Example</b>
              </h3>

              <img src="/img/code1.png" alt="code" />
            </div>

            <p className="info">
              A comment does not always have to be text that explains the code. It can also be used to prevent Python from executing code. In the example below, only the second statement will be executed.
            </p>

            <div className='example-holder'>
              <h3>
                <b>Example</b>
              </h3>

              <img src="/img/code2.png" alt="code" />
            </div>

            <h3>
              Creating A Comment
            </h3>

            <p className="info">
              <b>
                Pyhton does not really have syntax for multi line comments.
              </b>
            </p>

            <p className="info">
              If you want to comment on multiple lines, simply insert the
              <span className='info-tag'>#</span>
              at the beginning  of each line.
            </p>

            <p className="info">
              Comments  can be used to <b>
                prevent execution </b> when testin code.
            </p>




            <div className='example-holder'>
              <h3>
                <b>Example</b>
              </h3>

              <img src="/img/code3.png" alt="code" />
            </div>


            <p className="info">
              Another cool trick would be to use a multi line string
            </p>


            <p className="info">
              Since Python will ignore string literals that are not assigned to a variable, you can add a multiline string (triple quotes) in your code, and place your comment inside it:
            </p>

            <div className='example-holder'>
              <h3>
                <b>Example</b>
              </h3>

              <img src="/img/code4.png" alt="code" />
            </div>

            <p className="info">
              As long as the string is not assigned to a variable, Python will read the code, but then ignore it, and you have made a multiline comment.
            </p>

            <div className='action'>
              <p
                onClick={() => {
                  gotoNext()
                }}
              >
                Continue
              </p>
            </div>

          </div>
        }

        {
          currentStage === 2 &&
          <div>
            <p className="info">
              <b>Variables</b> are containers <b>
                for storing data values.
              </b>
            </p>


            <h3>
              Creating A Comment
            </h3>

            <p className="info">
              A variable is created the moment a value is assigned to it with the assigment operator. <span className='info-tag'>=</span>
            </p>


            <div className='example-holder'>
              <h3>
                <b>Example</b>
              </h3>

              <img src="/img/code5.png" alt="code" />
            </div>

            <p className="info">
              Variables do not need to be declared with any particular type, and can even change type after they have been set.
            </p>

            <div className='example-holder'>
              <h3>
                <b>Example</b>
              </h3>

              <img src="/img/code6.png" alt="code" />
            </div>


            <h3>
              Casting
            </h3>

            <p className="info">
              If you want to specify the data type of a variable, this can be done with casting.
            </p>

            <div className='example-holder'>
              <h3>
                <b>Example</b>
              </h3>

              <img src="/img/code7.png" alt="code" />
            </div>

            <h3>
              Get Data Type
            </h3>

            <p className="info">
              You can get the data type of a variable with the <span className='info-tag'>type()</span> function.
            </p>

            <div className='example-holder'>
              <h3>
                <b>Example</b>
              </h3>

              <img src="/img/code7.png" alt="code" />
            </div>

            <p className="info">
              The output of this code will be
            </p>

            <div className='output-holder'>
              <p>
                {`< class ‘int’>`}
              </p>
              <p>
                {`< class str>`}
              </p>
            </div>


            <div className='tips'>
              <p className="info">
                <b>Hot Tip! </b>
              </p>

              <p className="info">
                String variables can be declared either by using single or double quotes:
              </p>

              <div className='example-holder'>
                <img src="/img/code8.png" alt="code" />
              </div>
            </div>


            <div className='tips'>
              <p className="info">
                <b>Hot Tip! </b>
              </p>

              <p className="info">
                Variable names are case sensitive.
              </p>

              <div className='example-holder'>
                <img src="/img/code9.png" alt="code" />
              </div>
            </div>


            <div className='action'>
              <p
                onClick={() => {
                  gotoNext()
                }}
              >
                Continue
              </p>
            </div>
          </div>
        }

        {
          currentStage === 3 &&
          <div>
            <p className='info'>
              Python is a popular programming language.
            </p>
            <p className='info'>
              Python can be used on a server to create web applications.
            </p>

            <h3>
              Syntax
            </h3>

            <p className='info'>
              The syntax of a programming language is the set of rules that defines how a program will be written and interpreted (both by both runtime system and by human readers).
            </p>

            <p className='info'>
              Python syntax can be executed by writing directly in the Command Line:
            </p>

            <div className='example-holder'>
              <h3>
                <b>Example</b>
              </h3>

              <img src="/img/code7.png" alt="code" />
            </div>

            <p className='info'>
              The output of this code will be
            </p>


            <div className='output-holder'>
              <p>
                {`<Hello World>`}
              </p>
            </div>

            <div className='action'>
              <p
                onClick={() => {
                  gotoNext()
                }}
              >
                Continue
              </p>
            </div>
          </div>
        }

        {
          currentStage === 4 &&
          <div>
            <p className='info'>
              Python supports the usual logical conditions from mathematics:
            </p>


            <p className='info'>
              Python supports the usual logical conditions from mathematics:
            </p>

            <p className='info'>
              These conditions can be used in several ways, most commonly in "if statements" and loops.
            </p>

            <p className='info'>
              An "if statement" is written by using the <span>if</span>
            </p>


            <ul>

              <li>
                <p className='info'>Equals <span>a == b</span> </p>
              </li>

              <li>
                <p className='info'>Not equals <span>a != b</span> </p>
              </li>

              <li>
                <p className='info'>Less than <span>{'a < b'}</span> </p>
              </li>

              <li>
                <p className='info'>Less than or equal to <span>{'a <= b'}</span> </p>
              </li>

              <li>
                <p className='info'>Greater than <span>{'a > b'}</span> </p>
              </li>


              <li>
                <p className='info'>Greater than or equal to <span>{'a >= b'}</span> </p>
              </li>
            </ul>

            <p className='info'>
              These conditions can be used in several ways, most commonly in "if statements" and loops.
            </p>

            <p className='info'>
              An "if statement" is written by using the <span>if</span> keyword.
            </p>

            <div className='example-holder'>
              <h3>
                <b>Example</b>
              </h3>

              <p className='info'>
                If Statements can be written like this:
              </p>

              <img src="/img/code10.png" alt="code" />
            </div>

            <p className='info'>
              In this example we use two variables, <span>a</span> and <span>b</span> which are used as part of the  <span>if</span> statement to test whether  <span>b</span> is greater than <span>a</span>. As <span>a</span> is <span>33</span>, and <span>b</span> is <span>200</span>, , we know that 200 is greater than 33, and so we print to screen that;
            </p>


            <div className='output-holder'>
              <p>
                {`<b is greater than a>`}
              </p>
            </div>

            <h3>
              Indentation
            </h3>

            <p className='info'>
              Python relies on <b>indentation</b> (whitespace at the beginning of a line) to <b>define scope in the code</b>. Other programming languages often use curly-brackets for this purpose.
            </p>

            <div className='example-holder'>
              <h3>
                <b>Example</b>
              </h3>

              <p className='info'>
                An if statement, without indentation (will raise an error):
              </p>

              <img src="/img/code11.png" alt="code" />
            </div>

            <h3>
              Elif
            </h3>

            <p className='info'>
              The <span>elif</span> keyword is pythons way of saying "if the previous conditions were not true, then try this condition".
            </p>

            <div className='example-holder'>
              <h3>
                <b>Example</b>
              </h3>

              <img src="/img/code12.png" alt="code" />
            </div>

            <p className='info'>
              In this example, <span>a</span> is equal to <span>b</span> , so the first conditon is not true, but the <span>elif</span> condition is true, so the output of this code will be:
            </p>

            <div className='output-holder'>
              <p>
                {`<a and b are equal>`}
              </p>
            </div>



            <h3>
              Else
            </h3>

            <p className='info'>
              The <span>else</span> keyword catches anything which isn't caught by the preceding conditions.
            </p>

            <div className='example-holder'>
              <h3>
                <b>Example</b>
              </h3>

              <img src="/img/code13.png" alt="code" />
            </div>

            <p className='info'>
              In this example, <span>a</span> is greater to <span>b</span> , , so the first conditon is not true, also the <span>elif</span> condition is not true, so we go to the  <span>else</span> condition and print the following output:
            </p>

            <div className='output-holder'>
              <p>
                {`<a is greater than b>`}
              </p>
            </div>

            <p className='info'>
              You can also have an <span>else</span> without the <span>elif</span>.
            </p>

            <div className='example-holder'>
              <h3>
                <b>Example</b>
              </h3>

              <img src="/img/code14.png" alt="code" />
            </div>

            <p className='info'>
              The output of this code will be:
            </p>

            <div className='output-holder'>
              <p>
                {`<a is greater than b>`}
              </p>
            </div>


            <h3>
              Short Hand If
            </h3>

            <p className='info'>
              If you have only one statement to execute, you can put it on the same line as the if statement.
            </p>

            <div className='example-holder'>
              <h3>
                <b>Example</b>
              </h3>

              <p className='info'>
                One line <span>if</span> statement:
              </p>

              <img src="/img/code15.png" alt="code" />
            </div>

            <h3>
              Short Hand If...Else
            </h3>

            <p className='info'>
              If you have only one statement to execute, one for if, and one for else, you can put it all on the same line:
            </p>


            <div className="tips">
              <p className="info">
                <b>Hot Tip! </b>
              </p>

              <p className="info">
                This technique is known as <b>Ternary Operators</b>, or <b>Conditional Expressions.</b>
              </p>
            </div>


            <div className='example-holder'>
              <h3>
                <b>Example</b>
              </h3>

              <p className='info'>
                One line <span>if</span> <span>else</span> statement:
              </p>

              <img src="/img/code16.png" alt="code" />
            </div>


            <p className="info">
              You can also have multiple else statements on the same line:
            </p>

            <div className='example-holder'>
              <h3>
                <b>Example</b>
              </h3>

              <p className='info'>
                One line <span>if</span> <span>else</span> statement with 3 conditions: {'print("A") if a > b else print("=") if a == b else print("B")'}
              </p>

              <img src="/img/code17.png" alt="code" />
            </div>

            <h3>And</h3>
            <p className="info">
              The <span>and</span> keyword is a logical operator, and is used to combine conditional statements:
            </p>

            <div className='example-holder'>
              <h3>
                <b>Example</b>
              </h3>

              <p className='info'>
                Test if  <span>a</span> is greater than <span>b</span> , AND if   <span>c</span> is greater than <span>a</span>
              </p>

              <img src="/img/code18.png" alt="code" />
            </div>

            <p className='info'>
              The output of this code will be:
            </p>

            <div className='output-holder'>
              <p>
                {`<Both conditions are true>`}
              </p>
            </div>


            <h3>Or</h3>
            <p className="info">
              The <span>or</span> keyword just like the  <span>and</span> keyword, is a logical operator, and is used to combine conditional statements:
            </p>

            <div className='example-holder'>
              <h3>
                <b>Example</b>
              </h3>

              <p className='info'>
                Test if  <span>a</span> is greater than <span>b</span> , OR if  <span>a</span> is greater than <span>c</span>
              </p>

              <img src="/img/code19.png" alt="code" />
            </div>

            <p className='info'>
              The output of this code will be:
            </p>

            <div className='output-holder'>
              <p>
                {`<At least one of the conditions is True>`}
              </p>
            </div>



            <h3>Nested If</h3>
            <p className="info">
              You can have <span>if</span> statements inside  <span>if</span> statements, this is called nested if statements.
            </p>

            <div className='example-holder'>
              <h3>
                <b>Example</b>
              </h3>

              <p className='info'>
                Test if  <span>a</span> is greater than <span>b</span> , OR if  <span>a</span> is greater than <span>c</span>
              </p>

              <img src="/img/code20.png" alt="code" />
            </div>

            <p className='info'>
              The output of this code will be:
            </p>

            <div className='output-holder'>
              <p>
                {`<Above ten,>
`}
                <br />
                {`
<and also above twenty >`}
              </p>
            </div>


            <h3>The Pass Statement</h3>
            <p className="info">
              <span>if</span> cannot be empty, but if you for some reason have an  <span>if</span> statement t with no content, put in the <span>pass</span> statement to avoid getting an error.
            </p>

            <div className='example-holder'>
              <h3>
                <b>Example</b>
              </h3>

              <p className='info'>
                Test if  <span>a</span> is greater than <span>b</span> , OR if  <span>a</span> is greater than <span>c</span>
              </p>

              <img src="/img/code21.png" alt="code" />
            </div>

            <p className='info'>
              The output of this code will be empty:
            </p>


            <div className='action'>
              <p
                onClick={() => {
                  navigate('/flippydolphin')
                }}
              >
                Play Flippydolphin
              </p>

              <p
                onClick={() => {
                  navigate('/jigsaw')
                }}
              >
                Play Code Jigsaw
              </p>
            </div>
          </div>
        }

      </div>
    </div>
  )
}

export default Learn