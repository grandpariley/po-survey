import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LongSurveySubmission, MediumSurveySubmission, RiskSurveySubmission, ShortSurveySubmission, SurveyState } from '../model/model';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-survey-container',
  template: `
  <div class="grid grid-cols-1 px-6 py-4">
    <h1 class="text-xl font-medium mb-4">ESG-Conscious Portfolio Survey</h1>
    <main class="grid grid-cols-1">
      <app-risk-survey *ngIf="state.value === 'RISK'" (submit)="onRiskSurveySubmit($event)"></app-risk-survey>
      <app-short-survey *ngIf="state.value === 'SHORT'" (submit)="onShortSurveySubmit($event)" [disabledInputs]="[]"></app-short-survey>
      <app-info *ngIf="state.value === 'INFO'" (back)="onInfoBack($event)"></app-info>
      <app-medium-survey *ngIf="state.value === 'MEDIUM'" (submit)="onMediumSurveySubmit($event)"></app-medium-survey>
      <app-long-survey *ngIf="state.value === 'LONG'" (submit)="onLongSurveySubmit($event)"></app-long-survey>
    </main>
  </div>`,
})
export class SurveyContainerComponent implements OnInit {
  state: FormControl<SurveyState> = new FormControl<SurveyState>('RISK', Validators.required);

  constructor(private surveyService: SurveyService, private router: Router) { }

  ngOnInit(): void {
    this.state.valueChanges.subscribe(s => {
      if (s === 'COMPLETE') {
        this.surveyService.complete();
        this.router.navigate(['thanks']);
      }
    });
  }

  onInfoBack($event: ShortSurveySubmission) {
    this.state.setValue(this.surveyService.completeShortSurvey($event));
  }

  onRiskSurveySubmit($event: RiskSurveySubmission): void {
    this.state.setValue(this.surveyService.completeRiskSurvey($event));
  }

  onShortSurveySubmit($event: ShortSurveySubmission): void {
    this.state.setValue(this.surveyService.completeShortSurvey($event));
  }

  onMediumSurveySubmit($event: MediumSurveySubmission): void {
    this.state.setValue(this.surveyService.completeMediumSurvey($event));
  }

  onLongSurveySubmit($event: LongSurveySubmission): void {
    this.state.setValue(this.surveyService.completeLongSurvey($event));
  }

}
