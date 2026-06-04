import React, { useEffect, useRef, useState } from 'react'

const QUESTIONS = [
    {
        question: 'What is ReactJS?',
        options: [
            'A database',
            'A JavaScript library for building user interfaces',
            'A CSS framework',
            'A backend language',
        ],
        correctOption: 'A JavaScript library for building user interfaces',
    },
    {
        question: 'Who developed ReactJS?',
        options: ['Google', 'Microsoft', 'Facebook', 'Twitter'],
        correctOption: 'Facebook',
    },
    {
        question: 'What is the command to create a new React app?',
        options: [
            'npx create-react-app myApp',
            'npm install react',
            'react new app',
            'node start-react',
        ],
        correctOption: 'npx create-react-app myApp',
    },
    {
        question: 'What does JSX stand for?',
        options: [
            'JavaScript Extension',
            'Java Standard XML',
            'JavaScript XML',
            'Java Syntax Exchange',
        ],
        correctOption: 'JavaScript XML',
    },
    {
        question: 'Which method is used to render React content?',
        options: [
            'ReactDOM.display()',
            'React.show()',
            'ReactDOM.render()',
            'React.view()',
        ],
        correctOption: 'ReactDOM.render()',
    },
    {
        question: 'How do you write a React component using a function?',
        options: [
            'function MyComponent() {}',
            'component MyComponent() {}',
            'class MyComponent() {}',
            'render MyComponent() {}',
        ],
        correctOption: 'function MyComponent() {}',
    },
    {
        question:
            'Which hook is used to manage state in a functional component?',
        options: ['useEffect', 'useRef', 'useState', 'useMemo'],
        correctOption: 'useState',
    },
    {
        question: 'What is the correct syntax to pass a prop in React?',
        options: [
            "<MyComponent prop='value' />",
            "{MyComponent(prop='value')}",
            "[MyComponent prop='value']",
            "<MyComponent.prop = 'value' />",
        ],
        correctOption: "<MyComponent prop='value' />",
    },
    {
        question: 'Which of these is used to add styles in React inline?',
        options: [
            "style='color: red'",
            "style={{color: 'red'}}",
            "styles='color: red'",
            "css={{color: 'red'}}",
        ],
        correctOption: "style={{color: 'red'}}",
    },
    {
        question: 'What is the default port number React app runs on?',
        options: ['3000', '8080', '8000', '5000'],
        correctOption: '3000',
    },
];

enum Step {
    start,
    inProgress,
    end
}

function QuizApp() {
    const [step, setStep] = useState(Step.start)
    const [questionIndex, setQuestionIndex] = useState(0)
    const [selectedOption, setSelectedOption] = useState<string | null>(null)
    const count = useRef(0)

    useEffect(() => {
        if(!selectedOption) return

        if(QUESTIONS[questionIndex].correctOption == selectedOption) {
            count.current = count.current + 1
        }

        if(questionIndex >= QUESTIONS.length - 1) {
            setStep(Step.end)
        }
    }, [selectedOption])
    

    return (
        <div style={{display:"grid", justifyContent:"center", alignContent:"center"}}>
            {step == Step.start && <div>
                    <p>Click here to start</p>
                    <button onClick={() => setStep(Step.inProgress)}>Start</button>
                </div>}
            {step == Step.inProgress && <>
                        <p>{QUESTIONS[questionIndex].question}</p>
                        <div>{QUESTIONS[questionIndex].options.map(option => {
                            console.log(selectedOption)
                            return <p onClick={() => setSelectedOption(option)} style={{border: "1px solid Grey", padding: "5px", marginBlock:"5px", borderRadius:"8px", backgroundColor: `${selectedOption != null && (selectedOption == option || QUESTIONS[questionIndex].correctOption == option) ? QUESTIONS[questionIndex].correctOption == option ? "green": "red": ""}`}}>{option}</p>
                        })}</div>
                        {questionIndex < QUESTIONS.length - 1 && <button onClick={() => {
                            setSelectedOption(null)
                            setQuestionIndex(prev => prev + 1)
                        }}>Next</button>}
                    </>}
            {step == Step.end && <div>You have completed the test, you scored {count.current} of {QUESTIONS.length}</div>}
        </div>
    )
}

export default QuizApp