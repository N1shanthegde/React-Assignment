import React from 'react';
import QuizSectionComponent from './QuizSection';
import quizData from '../data/quizData.json';

const QuizApp: React.FC = () => {
  return (
    <div className="w-11/12 mx-auto px-4 py-8">
      {quizData.map((section) => (
        <QuizSectionComponent key={section.id} section={section} />
      ))}
    </div>
  );
};

export default QuizApp;