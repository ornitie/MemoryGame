import { Option } from '../option/option';

export class Question {
  id: string;
  text: string;
  answer: string;
  type: string;
  options: Option[];

  constructor(id: string, text:string, answer:string, type: string, options: Option[]){
    this.id = id;
    this.text = text;
    this.answer = answer;
    this.type = type;
    this.options = options;
  }
}