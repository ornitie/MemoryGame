export class Question {
  id: string;
  text: string;
  answer: string;
  type: string;

  constructor(id: string, text:string, answer:string, type: string){
    this.id = id;
    this.text = text;
    this.answer = answer;
    this.type = type;
  }
}