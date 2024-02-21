import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() title: string = 'Header';
  @Input() type: 'success' | 'danger' | 'warning' | 'normal' = 'normal';
}
