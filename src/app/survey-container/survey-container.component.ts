import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LongSurveySubmission, RiskSurveySubmission, ShortSurveySubmission, SurveyState } from '../model/model';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-survey-container',
  template: `
  <div class="grid grid-cols-1 px-6 py-4">
    <h1 class="text-xl font-medium">ESG-Conscious Portfolio Survey</h1>
    <div class="text-xs text-gray-600 mb-4">
      <p>Please note that you can close your browser at any time to withdraw consent. No information will be collected until the final submission.</p>
      <p>Please note that by submitting the survey you will be providing implied consent. Please review the <a class="underline text-blue-600" href="/assets/ESG-Conscious-Portfolio-Survey-Consent-Form.pdf" target="_blank">consent form</a> prior to submission.</p>
    </div>
    <main class="grid grid-cols-1">
      <app-risk-survey *ngIf="state.value === 'RISK'" (submit)="onRiskSurveySubmit($event)"></app-risk-survey>
      <app-short-survey *ngIf="state.value === 'SHORT'" (submit)="onShortSurveySubmit($event)" [disabledInputs]="[]"></app-short-survey>
      <app-info *ngIf="state.value === 'INFO'" (back)="onInfoBack($event)"></app-info>
      <app-long-survey *ngIf="state.value === 'LONG'" (submit)="onLongSurveySubmit($event)"></app-long-survey>
      <app-complete *ngIf="state.value === 'COMPLETE'" (submit)="onCompleteSubmit()"></app-complete>
    </main>
  </div>`,
})
export class SurveyContainerComponent implements OnInit {
  state: FormControl<SurveyState> = new FormControl<SurveyState>('RISK', Validators.required);

  constructor(private surveyService: SurveyService, private router: Router) { }

  ngOnInit(): void {
    this.state.valueChanges.subscribe(s => {
      if (s === 'SUBMIT') {
        this.surveyService.complete();
        this.router.navigate(['thanks']);
      }
    });
  }

  onInfoBack($event: ShortSurveySubmission) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.state.setValue(this.surveyService.completeShortSurvey($event));
  }

  onRiskSurveySubmit($event: RiskSurveySubmission): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.state.setValue(this.surveyService.completeRiskSurvey($event));
  }

  onShortSurveySubmit($event: ShortSurveySubmission): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.state.setValue(this.surveyService.completeShortSurvey($event));
  }

  onLongSurveySubmit($event: LongSurveySubmission): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.state.setValue(this.surveyService.completeLongSurvey($event));
  }

  onCompleteSubmit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.state.setValue(this.surveyService.completeSurvey());
  }

}
