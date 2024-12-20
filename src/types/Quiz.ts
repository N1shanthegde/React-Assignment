export interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer: string;
}

export interface QuizSection {
    id: string;
    name: string;
    questions: Question[];
}

