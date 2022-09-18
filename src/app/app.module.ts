import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuestionModule } from './question/question.module';
import { QuestionComponent } from './question/question.component';
import { OptionComponent } from './option/option.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BibliographyModule } from './bibliography/bibliography.module';
import { GridsModule } from './grids/grids.module';
import { ModalModule } from './modal/modal.module';
@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    OptionComponent,
    NavbarComponent,
    ErrorComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuestionModule,
    BibliographyModule,
    GridsModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
