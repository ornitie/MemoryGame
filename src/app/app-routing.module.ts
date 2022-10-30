import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ErrorComponent } from './error/error.component';
import { QuestionComponent } from './question/question.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BibliographyComponent } from './bibliography/bibliography.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'bibliography', component: BibliographyComponent },
  { path: 'test', component: CardComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }