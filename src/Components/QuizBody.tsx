import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/quizData.json";

const QuizPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const quiz = data.find((quiz) => quiz.id === id);

  // State to store user answers and submission status
  const [userAnswers, setUserAnswers] = useState<{ [questionId: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0); // State to store total correct answers

  if (!quiz) {
    return <p>Quiz not found!</p>;
  }

  // Handle option selection
  const handleOptionChange = (questionId: number, selectedOption: string) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  // Handle quiz submission
  const handleSubmit = () => {
    let calculatedScore = 0;

    quiz.questions.forEach((question) => {
      if (userAnswers[question.id] === question.correctAnswer) {
        calculatedScore += 1; // Increment score for correct answers
      }
    });

    setScore(calculatedScore);
    setSubmitted(true); // Mark quiz as submitted
  };

  return (
    <div className="w-11/12 mx-auto px-4 py-8">
      <h1 className="text-xl font-bold mx-10">{quiz.name}</h1>
      <div className=" font-bold mx-10">
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent default form submission
          handleSubmit();
        }}
      >
        <ul>
          {quiz.questions.map((question) => (
            <li key={question.id} className="my-6">
              <p className="font-semibold">{question.text}</p>
              <ul>
                {question.options.map((option, index) => {
                  const isCorrect = option === question.correctAnswer;
                  const isSelected = userAnswers[question.id] === option;

                  return (
                    <li
                      key={index}
                      className={`my-2 ${
                        submitted
                          ? isCorrect
                            ? "text-green-600 font-bold"
                            : isSelected
                            ? "text-red-600 font-bold"
                            : ""
                          : ""
                      }`}
                    >
                      <label>
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={option}
                          checked={isSelected}
                          onChange={() => handleOptionChange(question.id, option)}
                          disabled={submitted} // Disable input after submission
                        />
                        <span className="ml-2">{option}</span>
                      </label>
                      {submitted && isCorrect && (
                        <span className="ml-2"></span>
                      )}
                    </li>
                  );
                })}
              </ul>
              
            </li>
          ))}
        </ul>

        

        {!submitted && (
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit Quiz
          </button>
        )}
        {submitted && (
          <div className="mt-6">
            <h2 className="text-lg font-bold">Your Score</h2>
            <p className="mt-2 text-lg">
              You got <span className="font-bold">{score}</span> out of{" "}
              {quiz.questions.length} correct.
            </p>
          </div>
        )}
      </form>
      </div>
    </div>
  );
};

export default QuizPage;
