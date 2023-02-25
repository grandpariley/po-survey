import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MultipleChoice, ShortSurveySubmission } from '../model/model';

@Component({
  selector: 'app-short-survey',
  templateUrl: './short-survey.component.html',
})
export class ShortSurveyComponent {
  
  @Output() submit: EventEmitter<ShortSurveySubmission> = new EventEmitter<ShortSurveySubmission>();
  formGroup = new FormGroup({
    q1: new FormControl<MultipleChoice | undefined | null>(null, Validators.required),
  });

  @Input() disabledInputs: string[] = []

  onSubmit(): void {
    this.submit.emit({
      q1: this.formGroup.get('q1')?.value
    });
  }

}
