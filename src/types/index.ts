import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export type TGameStages = 'start' | 'game' | 'finish';

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

export type TButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
>;
