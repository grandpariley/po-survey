import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MediumSurveySubmission, Rank } from '../model/model';

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

  q4cOptions = [
    'Biodiversity',
    'Water',
    'Waste',
    'Social and employee matters',
    'GHG intensity',
    'Countries subject to social violation',
    'Exposure to fossil fuels through real estate assets',
    'Exposure to energy-inefficient real estate assets',
  ];

  formGroup = new FormGroup({
    q2: new FormControl<string | null>(null),
    q3: new FormArray<FormControl<number | null>>(Array(this.q3Options.length).fill(new FormControl(null))),
    q4a: new FormControl<number | null>(null, Validators.required),
    q4b: new FormControl<number | null>(null, Validators.required),
    q4c: new FormArray<FormControl<number | null>>(Array(this.q4cOptions.length).fill(new FormControl(null))),
    q5: new FormControl<'A' | 'B' | null>(null, Validators.required),
  });

  get q3Form(): FormArray<FormControl<number | null>> {
    return this.formGroup.get('q3') as FormArray<FormControl<number | null>>;
  }

  get q4cForm(): FormArray<FormControl<number | null>> {
    return this.formGroup.get('q4c') as FormArray<FormControl<number | null>>;
  }

  ngOnInit() {
    this.q3Form.valueChanges.subscribe(v => {
      console.log(this.q3Form.value)
    })
    this.q4cForm.valueChanges.subscribe(v => {
      console.log(this.q4cForm.value)
    })
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
