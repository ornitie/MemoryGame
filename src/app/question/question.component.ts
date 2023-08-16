import { Component, OnInit } from '@angular/core';
import { Option } from '../entities/option';
import { Question } from '../entities/question';
import { QuestionService } from './question.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question?: Question;
  options: Array<Option> = [];

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.getQuestion();
  }

  getQuestion(){
    this.question = this.questionService.getQuestion();
    this.options = this.question.options;
  }

}
