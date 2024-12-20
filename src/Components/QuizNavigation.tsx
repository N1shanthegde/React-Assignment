import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { QuizSection } from '../types/Quiz';

interface QuizNavigationProps {
  sections: QuizSection[];
}

const QuizNavigation: React.FC<QuizNavigationProps> = ({ sections }) => {
  const location = useLocation();

  return (
    <div className="flex space-x-4 mb-6 p-4 bg-gray-100 rounded-lg overflow-x-auto">
      {sections.map((section) => (
        <Link
          key={section.id}
          to={`/quiz/${section.id}`}
          className={`px-4 py-2 rounded-md whitespace-nowrap
            ${location.pathname === `/quiz/${section.id}`
              ? 'bg-blue-500 text-white'
              : 'bg-white hover:bg-gray-200'}`}
        >
          {section.name}
        </Link>
      ))}
    </div>
  );
};

export default QuizNavigation;