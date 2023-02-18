import { Component, Input } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Rank } from '../model/model';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
})
export class RankComponent {

  @Input() options: string[] = [];
  @Input() form: FormArray<FormControl<number | null>> = new FormArray<FormControl<number | null>>([]);

}
