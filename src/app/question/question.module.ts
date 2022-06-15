import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionComponent } from '../option/option.component';
import { CardComponent } from '../card/card.component';


@NgModule({
  declarations: [
    CardComponent,
    OptionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class QuestionModule { }