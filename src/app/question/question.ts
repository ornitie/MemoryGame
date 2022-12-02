import { Option } from '../option/option';
import { QuestionType } from './question-type';

export class Question {
  id: string;
  text: string;
  answer: string;
  type: QuestionType;
  options: Option[];

  constructor(id: string, text:string, answer:string, type: QuestionType, options: Option[]){
    this.id = id;
    this.text = text;
    this.answer = answer;
    this.type = type;
    this.options = options;
  }
}