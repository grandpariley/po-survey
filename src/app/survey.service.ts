import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LongSurveySubmission, MediumSurveySubmission, RiskSurveySubmission, ShortSurveySubmission, SurveyState, SurveySubmission } from './model/model';

const URI = 'https://faas-tor1-70ca848e.doserverless.co/api/v1/web/fn-e3f092c8-27f3-46b5-a58f-c77e29833d10/cloud/posurvey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  state: SurveySubmission = {
    risk: null,
    short: null,
    medium: null,
    long: null,
  };

  constructor(private http: HttpClient) { }

  completeRiskSurvey(riskSurveySubmission: RiskSurveySubmission): SurveyState {
    this.state.risk = riskSurveySubmission;
    return 'SHORT';
  }

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
    this.http.post(URI, this.state, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe({
      next: (res) => console.log("successfully submitted survey", res),
      error: (err) => console.error(err)
    });
  }
}

