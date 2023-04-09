import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyContainerComponent } from './survey-container/survey-container.component';
import { ThanksContainerComponent } from './thanks-container/thanks-container.component';
import { ShortSurveyComponent } from './short-survey/short-survey.component';
import { LongSurveyComponent } from './long-survey/long-survey.component';
import { RankComponent } from './rank/rank.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InfoComponent } from './info/info.component';
import { RiskSurveyComponent } from './risk-survey/risk-survey.component';
import { CompleteComponent } from './complete/complete.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyContainerComponent,
    ThanksContainerComponent,
    ShortSurveyComponent,
    LongSurveyComponent,
    RankComponent,
    InfoComponent,
    RiskSurveyComponent,
    CompleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
