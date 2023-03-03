import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MediumSurveySubmission } from '../model/model';

@Component({
  selector: 'app-medium-survey',
  templateUrl: './medium-survey.component.html',
})
export class MediumSurveyComponent {

  @Output() submit: EventEmitter<MediumSurveySubmission> = new EventEmitter<MediumSurveySubmission>();

  q3Options = [
    'Want to have a clear positive impact on the society and/or the environment with the investment',
    'Want to align investments with personal values',
    'Want to invest in products taking into account sustainability factors to increase risk adjusted return'
  ];

  formGroup = new FormGroup({
    q2: new FormControl<string | null>(null),
    q3: new FormArray<FormControl<number | null>>(this.q3Options.map(_ => new FormControl(null))),
    q4a: new FormControl<number | null>(null),
    q4b: new FormControl<number | null>(null),
    q4c: new FormControl<number | null>(null),
    q5: new FormControl<'A' | 'B' | null>(null, Validators.required),
  });

  get q3Form(): FormArray<FormControl<number | null>> {
    return this.formGroup.get('q3') as FormArray<FormControl<number | null>>;
  }

  onSubmit(): void {
    this.submit.emit({
      q2: this.formGroup.get('q2')?.value,
      q3: this.formGroup.get('q3')?.value,
      q4a: this.formGroup.get('q4a')?.value,
      q4b: this.formGroup.get('q4b')?.value,
      q4c: this.formGroup.get('q4c')?.value,
      q5: this.formGroup.get('q5')?.value,
    })
  }
}
