import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MultipleChoice, RiskSurveySubmission } from '../model/model';

@Component({
  selector: 'app-risk-survey',
  templateUrl: './risk-survey.component.html',
})
export class RiskSurveyComponent {

  @Output() submit: EventEmitter<RiskSurveySubmission> = new EventEmitter<RiskSurveySubmission>();

  formGroup = new FormGroup({
    r1: new FormControl<MultipleChoice | undefined | null>(null, Validators.required),
    r2: new FormControl<MultipleChoice | undefined | null>(null, Validators.required),
    r3: new FormControl<MultipleChoice | undefined | null>(null, Validators.required),
    r4: new FormControl<MultipleChoice | undefined | null>(null, Validators.required),
    r5: new FormControl<MultipleChoice | undefined | null>(null, Validators.required),
    r6: new FormControl<MultipleChoice | undefined | null>(null, Validators.required),
    r7: new FormControl<MultipleChoice | undefined | null>(null, Validators.required),
    r8: new FormControl<MultipleChoice | undefined | null>(null, Validators.required),
    r9: new FormControl<MultipleChoice | undefined | null>(null, Validators.required),
    r10: new FormControl<MultipleChoice | undefined | null>(null, Validators.required),
  });

  onSubmit(): void {
    this.submit.emit({
      r1: this.formGroup.get('r1')?.value,
      r2: this.formGroup.get('r2')?.value,
      r3: this.formGroup.get('r3')?.value,
      r4: this.formGroup.get('r4')?.value,
      r5: this.formGroup.get('r5')?.value,
      r6: this.formGroup.get('r6')?.value,
      r7: this.formGroup.get('r7')?.value,
      r8: this.formGroup.get('r8')?.value,
      r9: this.formGroup.get('r9')?.value,
      r10: this.formGroup.get('r10')?.value,
    });
  }
}
