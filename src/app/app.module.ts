import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuestionModule } from './question/question.module';
import { QuestionComponent } from './question/question.component';
import { OptionComponent } from './option/option.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GridsComponent } from './grids/grids.component';
import { AppRoutingModule } from './app-routing.module';
import { BibliographyComponent } from './bibliography/bibliography.component';
import { ErrorComponent } from './error/error.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ModalComponent } from './modal/modal.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    OptionComponent,
    NavbarComponent,
    GridsComponent,
    BibliographyComponent,
    ErrorComponent,
    HomepageComponent,
    ModalComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuestionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
