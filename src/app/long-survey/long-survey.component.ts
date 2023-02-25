import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { LongSurveySubmission, Rank } from '../model/model';

@Component({
  selector: 'app-long-survey',
  templateUrl: './long-survey.component.html',
})
export class LongSurveyComponent {

  @Output() submit: EventEmitter<LongSurveySubmission> = new EventEmitter<LongSurveySubmission>();

  q6Options = [
    'Environment matters',
    'Clean water and sanitation',
    'Affordable and clean energy',
    'Sustainable cities and communities',
    'Responsible consumption and production',
    'Climate action',
    'Water quality and fish stocks',
    'Nature conservation and biodiversity',
    'Social & governance matters',
    'No poverty',
    'Zero hunger',
    'Good health and well-being',
    'Quality education',
    'Gender equality',
    'Decent work and economic growth',
    'Sustainable industry, infrastructure and innovation',
    'Reduce inequalities',
    'Peace, justice and strong institutions',
    'All environment, social & governance matters',
  ];
  q7Options = [
    'Environment exclusions',
    'Pesticides and biocides',
    'Animal testing',
    'Genetic engineering',
    'Palm oil',
    'Coal',
    'Oil',
    'Nuclear energy',
    'Gas',
    'Fur',
    'Factory farming',
    'Social and ethics exclusions',
    'Weapons and/or armament',
    'Tobacco products',
    'Alcohol',
    'Gambling',
    'Pornography',
    'Research on human embryos',
    'Breach of international norms:',
    'Violation of the principles of the UN Global Compact (Human Rights, Labour, Environment, Anti-Corruption)',
    'Violation of OECD guidelines for multinational enterprises (Responsible business conduct)',
    'Violation of International Labour Organisation rules',
    'Don\'t refuse financing any sector',
  ];
  q8Options = [
    'Nuclear weapons',
    'Non-proliferation treaty of nuclear weapons',
    'Countries classified as not free',
    'Corruption',
    'Death sentence',
    'Wars',
    'Non-ratification of Paris-Agreement',
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
    q6: new FormArray<FormControl<number | null>>(this.q6Options.map(_ => new FormControl(null))),
    q7: new FormArray<FormControl<number | null>>(this.q7Options.map(_ => new FormControl(null))),
    q8: new FormArray<FormControl<number | null>>(this.q8Options.map(_ => new FormControl(null))),
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
