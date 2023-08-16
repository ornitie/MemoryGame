import { Injectable } from '@angular/core';
import { Question } from '../entities/question';
import questionSample from './question.sample';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getQuestion(): Question {
    const question: Question = questionSample.questions[0];
    console.log(question);
    return question;
  }
}
