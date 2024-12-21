export type Question ={
    id: number;
    text: string;
    options: string[];
    correctAnswer: string;
}

export type Quiz ={
    id: string;
    name: string;
    questions: Question[];
}

