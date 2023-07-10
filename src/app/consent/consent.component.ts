import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
})
export class ConsentComponent {
  @Output() submit: EventEmitter<void> = new EventEmitter<void>();

  onSubmit(): void {
    this.submit.emit();
  }
}
