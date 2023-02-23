import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LongSurveySubmission, MediumSurveySubmission, ShortSurveySubmission, SurveyState, SurveySubmission } from './model/model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  state: SurveySubmission = {
    short: null,
    medium: null,
    long: null,
  };

  constructor(private http: HttpClient) { }

  completeShortSurvey(shortSurveySubmission: ShortSurveySubmission): SurveyState {
    this.state.short = shortSurveySubmission;
    switch (shortSurveySubmission.q1) {
      case 'A':
        return 'MEDIUM';
      case 'B':
        return 'INFO';
      case 'C':
        return 'COMPLETE';
    }
    return null;
  }
  
  completeMediumSurvey(mediumSurveySubmission: MediumSurveySubmission): SurveyState {
    this.state.medium = mediumSurveySubmission;
    return mediumSurveySubmission.q5 === 'B' ?
      'COMPLETE' :
      'LONG';
  }

  completeLongSurvey(longSurveySubmission: LongSurveySubmission): SurveyState {
    this.state.long = longSurveySubmission;
    return 'COMPLETE';
  }

  complete(): void {
    this.http.post(environment.uri, this.state, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.bearer}`
      }
    }).subscribe({
      error: err => console.error(err)
    });
  }
}

