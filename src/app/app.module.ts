import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyContainerComponent } from './survey-container/survey-container.component';
import { ThanksContainerComponent } from './thanks-container/thanks-container.component';
import { ShortSurveyComponent } from './short-survey/short-survey.component';
import { MediumSurveyComponent } from './medium-survey/medium-survey.component';
import { LongSurveyComponent } from './long-survey/long-survey.component';
import { RankComponent } from './rank/rank.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyContainerComponent,
    ThanksContainerComponent,
    ShortSurveyComponent,
    MediumSurveyComponent,
    LongSurveyComponent,
    RankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
