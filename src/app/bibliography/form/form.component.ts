import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  formName = new Map<string, string>([
    ['verbName', 'Verbo'],
    ['firstPerson', 'Je'],
    ['secondPerson', 'Tu'],
    ['thirdPerson', 'Il/Elle'],
    ['firstPersonPlural', 'Nous'],
    ['secondPersonPlural', 'Vous'],
    ['thirdPersonPlural', 'Ils/Elles']
  ]);

  profileForm = new FormGroup({
    verbName: new FormControl('', [Validators.required]),
    firstPerson: new FormControl('', [Validators.required]),
    secondPerson: new FormControl('', [Validators.required]),
    thirdPerson: new FormControl('', [Validators.required]),
    firstPersonPlural: new FormControl('', [Validators.required]),
    secondPersonPlural: new FormControl('', [Validators.required]),
    thirdPersonPlural: new FormControl('', [Validators.required])
  });

  error = '';
  displayError = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.profileForm);
    console.log(Object.keys(this.profileForm.controls));
    if (!this.profileForm.valid) {
      this.error = 'Hay errores con el form';
      this.displayError = true;
    }
  }

}
