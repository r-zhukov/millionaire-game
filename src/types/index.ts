import { ButtonHTMLAttributes, ReactNode } from 'react';

export type TIssuesCostProps = {
  costs: number[];
  currentCost: number;
};

export type TQuestion = {
  id: number;
  question: string;
  answers: Array<{ answer: string; id: string; isRight: boolean }>;
};

export type TGameProps = {
  costs: number[];
  question: TQuestion;
  currentQuestionIndex: number;
};

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode | undefined;
};
