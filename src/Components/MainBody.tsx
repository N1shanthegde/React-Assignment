import { Link } from "react-router-dom";

import data from "../data/quizData.json";

function MainBody() {
  return (
    <>
      <div className="w-full flex justify-center my-4">
        <div className="relative w-10/12 flex flex-col md:flex-row md:h-screen">
          <ul className="w-full md:w-1/2 md:absolute md:left-0">
            {data.map((quiz) => (
              <li className="py-5" key={quiz.id}>
                <Link
                  to={`/quiz/${quiz.id}`}
                  className="text-blue-700  hover:underline "
                >
                  {quiz.name}
                </Link>
              </li>
            ))}
            <li className="py-5">
              <Link to="/" className="text-blue-700 hover:underline">
                Dummy Quiz
              </Link>
            </li>
            <li className="py-5">
              <Link to="/" className="text-blue-700 hover:underline">
              Dummy Quiz
              </Link>
            </li>
            <li className="py-5">
              <Link to="/" className="text-blue-700 hover:underline">
              Dummy Quiz
              </Link>
            </li>
            <li className="py-5">
              <Link to="/" className="text-blue-700 hover:underline">
              Dummy Quiz
              </Link>
            </li>
            <li className="py-5">
              <Link to="/" className="text-blue-700 hover:underline">
              Dummy Quiz
              </Link>
            </li>
          </ul>
          <ul className="w-full md:w-1/2 md:absolute md:left-1/2">
            <li className="py-5">
              <Link to="/" className="text-blue-700 hover:underline">
              Dummy Quiz
              </Link>
            </li>
            <li className="py-5">
              <Link to="/" className="text-blue-700 hover:underline">
              Dummy Quiz
              </Link>
            </li>
            <li className="py-5">
              <Link to="/" className="text-blue-700 hover:underline">
              Dummy Quiz
              </Link>
            </li>
            <li className="py-5">
              <Link to="/" className="text-blue-700 hover:underline">
              Dummy Quiz
              </Link>
            </li>
            <li className="py-5">
              <Link to="/" className="text-blue-700 hover:underline">
              Dummy Quiz
              </Link>
            </li>
            <li className="py-5">
              <Link to="/" className="text-blue-700 hover:underline">
              Dummy Quiz
              </Link>
            </li>
            <li className="py-5">
              <Link to="/" className="text-blue-700 hover:underline">
              Dummy Quiz
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MainBody;
