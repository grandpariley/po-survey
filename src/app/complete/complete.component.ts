import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
})
export class CompleteComponent {
  @Output() submit: EventEmitter<void> = new EventEmitter<void>();

  onSubmit(): void {
    this.submit.emit();
  }
}
