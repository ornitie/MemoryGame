import { Question } from '../question/question';

export class Option {
  id: string;
  text: string;
  type: string;
  question?: Question;
  
  constructor(id: string, text:string, type: string, question: Question){
    this.id = id;
    this.text = text;
    this.type = type;
    this.question = question;
  }
}