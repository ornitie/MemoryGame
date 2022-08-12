import { Injectable } from '@angular/core';
import { Question } from './question';
import questionSample from './question.sample';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getQuestions(): Question[] {
    console.log(questionSample);
    return [];
  }
}
