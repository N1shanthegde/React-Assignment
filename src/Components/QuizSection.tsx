import React, { useState } from "react";
import { QuizSection } from "../types/Quiz";

interface QuizSectionProps {
  section: QuizSection;
}

const QuizSectionComponent: React.FC<QuizSectionProps> = ({ section }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});
  const [submittedAnswers, setSubmittedAnswers] = useState<{
    [key: number]: boolean;
  }>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (questionId: number, selectedOption: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: selectedOption,
    }));
  };

  const handleSubmit = () => {
    // Validate answers and set results
    const results: { [key: number]: boolean } = {};
    section.questions.forEach((question) => {
      results[question.id] =
        selectedAnswers[question.id] === question.correctAnswer;
    });

    setSubmittedAnswers(results);
    setShowResults(true);
  };

  const calculateScore = () => {
    return Object.values(submittedAnswers).filter((result) => result).length;
  };

  return (
    <div className="bg-white p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">{section.name}</h2>

      {section.questions.map((question) => (
        <div key={question.id} className=" p-4">
          <p className="font-semibold mb-3">{question.text}</p>

          <div className="space-y-2">
            {question.options.map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="radio"
                  id={`${question.id}-${option}`}
                  name={`question-${question.id}`}
                  value={option}
                  checked={selectedAnswers[question.id] === option}
                  onChange={() => handleAnswerSelect(question.id, option)}
                  className="mr-2"
                />
                <label
                  htmlFor={`${question.id}-${option}`}
                  className={`flex-grow p-2 rounded 
                    ${
                      showResults && submittedAnswers[question.id] !== undefined
                        ? option === question.correctAnswer
                          ? "bg-green-100 text-green-800"
                          : selectedAnswers[question.id] === option
                          ? "bg-red-100 text-red-800"
                          : ""
                        : "hover:bg-gray-100"
                    }`}
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition-colors"
        disabled={
          Object.keys(selectedAnswers).length !== section.questions.length
        }
      >
        Submit Answers
      </button>

      {showResults && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <h3 className="text-xl font-bold mb-2">Results</h3>
          <p>
            You scored {calculateScore()} out of {section.questions.length}{" "}
            questions.
          </p>
          
        </div>
      )}
    </div>
  );
};

export default QuizSectionComponent;
