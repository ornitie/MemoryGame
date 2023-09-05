import { Component, Input } from '@angular/core';
import { DefaultModalService, IModalService } from './modal.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent  {

  @Input()
    isActive: Boolean = false;

  @Input()
    closeModal = () => (false);

  @Input()
    service: IModalService = new DefaultModalService();

  constructor() {}

  execute(): void {
    this.service.execute();
  }
}
