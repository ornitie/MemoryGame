export const TYPES = {
  OPEN: 'open'
};

export class QuestionType {
  id: string;
  title: string;

  constructor(id: string, title: string){
    this.id = id;
    this.title = title || TYPES.OPEN;
  }
}