import { Injectable } from '@angular/core';
import { LongSurveySubmission, MediumSurveySubmission, ShortSurveySubmission, SurveyState, SurveySubmission } from './model/model';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  state: SurveySubmission = {
    short: null,
    medium: null,
    long: null,
  };

  constructor() { }

  completeShortSurvey(shortSurveySubmission: ShortSurveySubmission): SurveyState {
    this.state.short = shortSurveySubmission;
    return shortSurveyComplete(shortSurveySubmission) ?
      'COMPLETE' :
      'MEDIUM';
  }
  completeMediumSurvey(mediumSurveySubmission: MediumSurveySubmission): SurveyState {
    this.state.medium = mediumSurveySubmission;
    return mediumSurveyComplete(mediumSurveySubmission) ?
      'COMPLETE' :
      'LONG';
  }
  completeLongSurvey(longSurveySubmission: LongSurveySubmission): SurveyState {
    this.state.long = longSurveySubmission;
    return 'COMPLETE';
  }
  complete(): void {
    console.log(this.state);
  }
}

function shortSurveyComplete(shortSurveySubmission: ShortSurveySubmission): boolean {
  return shortSurveySubmission.q1 === 'C'
}
function mediumSurveyComplete(mediumSurveySubmission: MediumSurveySubmission): boolean {
  return mediumSurveySubmission.q5 === 'B';
}

