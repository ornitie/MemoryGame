import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent  {

  @Input()
    isActive: String = 'is-active';

  @Input()
    closeModal = () => (false);

  constructor() { }
}
