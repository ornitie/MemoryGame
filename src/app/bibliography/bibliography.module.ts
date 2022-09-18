import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BibliographyComponent } from './bibliography.component';
import { GridsModule } from '../grids/grids.module';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  declarations: [
    FormComponent,
    BibliographyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GridsModule,
    ModalModule
  ],
  exports: [
    FormComponent
  ]
})

export class BibliographyModule { }
