import { Component, OnInit } from '@angular/core';
import { Question } from './question';
import { QuestionService } from './question.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questions: Array<Question> = [];

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
  }

  getQuestions(){
    this.questionService.getQuestions();
  }

}
