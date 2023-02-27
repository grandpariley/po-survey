import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { LongSurveySubmission, Rank } from '../model/model';
import { validateRank } from '../rank/rank.validator';

@Component({
  selector: 'app-long-survey',
  templateUrl: './long-survey.component.html',
})
export class LongSurveyComponent {

  @Output() submit: EventEmitter<LongSurveySubmission> = new EventEmitter<LongSurveySubmission>();

  q6Options = [
    'No poverty',
    'Zero hunger',
    'Good health and well-being',
    'Quality education',
    'Gender equality',
    'Clean water and sanitation',
    'Affordable and clean energy',
    'Decent work and economic growth',
    'Industry, innovation, and infrastructure',
    'Reduced inequality',
    'Sustainable cities and communities',
    'Responsible consumption and production',
    'Climate action',
    'Life below water',
    'Life on land',
    'Peace, justice and strong institutions',
  ];

// FIXME - ADD LINKS OPENING IN NEW TAB TO FINAL THREE
// THESE SHOULD BE CHECKBOXES
  q7Options = [
    'Pesticides and biocides',
    'Animal testing',
    'Genetic engineering',
    'Palm oil',
    'Coal',
    'Oil and gas',
    'Nuclear energy',
    'Fur',
    'Factory farming',
    'Weapons and/or armament',
    'Tobacco/nicotine products',
    'Alcohol',
    'Cannabis',
    'Gambling',
    'Pornography',
    'Research on human embryos',
    'Breach of international norms',
    'Violation of the principles of the UN Global Compact (Human Rights, Labour, Environment, Anti-Corruption)',
    'Violation of OECD guidelines for multinational enterprises (responsible business conduct)',
    'Violation of International Labour Organisation rules',
    'I don\'t refuse financing any sector',
  ];
// FIXME - THESE SHOULD BE CHECKBOXES
// LINK NOT FREE COUNTRIES
  q8Options = [
    'Nuclear weapons',
    'Non-proliferation treaty of nuclear weapons',
    'Countries classified as not free',
    'Corruption',
    'Death sentence',
    'Wars',
    'Non-ratification of the Paris Agreement',
    'I don\'t refuse financing any sector',
  ];

  get q6Form(): FormArray<FormControl<number | null>> {
    return this.formGroup.get('q6') as FormArray<FormControl<number | null>>;
  }

  get q7Form(): FormArray<FormControl<number | null>> {
    return this.formGroup.get('q7') as FormArray<FormControl<number | null>>;
  }

  get q8Form(): FormArray<FormControl<number | null>> {
    return this.formGroup.get('q8') as FormArray<FormControl<number | null>>;
  }

  formGroup = new FormGroup({
    q6: new FormArray<FormControl<number | null>>(this.q6Options.map(_ => new FormControl(null)), validateRank),
    q7: new FormArray<FormControl<number | null>>(this.q7Options.map(_ => new FormControl(null)), validateRank),
    q8: new FormArray<FormControl<number | null>>(this.q8Options.map(_ => new FormControl(null)), validateRank),
    q9: new FormControl<string | null>(null),
  });

  onSubmit(): void {
    this.submit.emit({
      q6: this.formGroup.get('q6')?.value,
      q7: this.formGroup.get('q7')?.value,
      q8: this.formGroup.get('q8')?.value,
      q9: this.formGroup.get('q9')?.value
    })
  }
}
