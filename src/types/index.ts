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
  currentQuestionIndex: number | null;
  checkResult: (isRight: boolean) => void;
};

export type TButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
>;

export type TAnswerVariant = 'selected' | 'correct' | 'wrong';
export type TQuestionStatus = 'waitingAnswer' | 'checkResult';

export type TAnswerProps = {
  answer: string;
  id: string;
  onAnswerClick: (id: string) => void;
  variant?: TAnswerVariant;
  disabled?: boolean;
};

export type TStartProps = {
  onBtnClick: () => void;
};

export type TFinishProps = {
  onBtnClick: () => void;
  amountWon: number;
};
