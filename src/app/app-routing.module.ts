import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyContainerComponent } from './survey-container/survey-container.component';
import { ThanksContainerComponent } from './thanks-container/thanks-container.component';

const routes: Routes = [
  {
    path: 'survey',
    component: SurveyContainerComponent,
  },
  {
    path: 'thanks',
    component: ThanksContainerComponent,
  },
  {
    path: '**',
    redirectTo: 'survey'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
