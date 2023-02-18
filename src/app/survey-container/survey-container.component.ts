import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LongSurveySubmission, MediumSurveySubmission, ShortSurveySubmission, SurveyState } from '../model/model';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-survey-container',
  templateUrl: './survey-container.component.html',
  styleUrls: ['./survey-container.component.css']
})
export class SurveyContainerComponent implements OnInit {
  state: FormControl<SurveyState> = new FormControl<SurveyState>('SHORT', Validators.required);

  constructor(private surveyService: SurveyService, private router: Router) { }

  ngOnInit(): void {
    this.state.valueChanges.subscribe(s => {
      if (s === 'COMPLETE') {
        this.router.navigate(['thanks']);
      }
    });
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
