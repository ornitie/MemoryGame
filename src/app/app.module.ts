import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { QuestionComponent } from './question/question.component';
import { OptionComponent } from './option/option.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GridsComponent } from './grids/grids.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    QuestionComponent,
    OptionComponent,
    NavbarComponent,
    GridsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
