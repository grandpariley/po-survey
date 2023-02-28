import { Component, Input } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
})
export class RankComponent {
  @Input() options: string[] = [];
  @Input() set form(formArray: FormArray<FormControl<number | null>>) {
    this._form = formArray.controls.map((formControl, index) => {
      console.log(index, this.options[index], this.options)
      return {
        option: this.options[index],
        formControl: formControl,
      } as RankControl
    });
  };

  ngOnInit() {
    console.log(this.options)
    console.log(this._form)
    console.log(this.form)
  }

  get form(): FormArray<FormControl<number | null>> {
    const formArray = new FormArray<FormControl<number | null>>([]);
    this.options.forEach(option => {
      const formControl: FormControl<number | null> | undefined = this._form.find(rankControl => rankControl.option === option)?.formControl;
      if (!formControl) {
        throw new Error("cannot find matching form control!");
      }
      formArray.push(formControl);
    });
    return formArray
  }

  _form: RankControl[] = [];

  get ranked(): RankControl[] {
    return this._form
      .filter(rankControl => rankControl.formControl.value !== null)
      .sort((a: RankControl, b: RankControl) => (a.formControl.value ? a.formControl.value : 0) - (b.formControl.value ? b.formControl.value : 0));
  }

  get unranked(): RankControl[] {
    return this._form.filter(rankControl => rankControl.formControl.value === null);
  }

  up(rankControl: RankControl): void {
    if (rankControl.formControl.value === 0) {
      return;
    }
    if (rankControl.formControl.value === null) {
      rankControl.formControl.setValue(this.ranked.length);
      return;
    }
    this.ranked.find(rankControl1 => rankControl1.formControl.value === (rankControl.formControl.value != null ? rankControl.formControl.value - 1 : 0))
    ?.formControl.setValue(rankControl.formControl.value + 1);
    rankControl.formControl.setValue(rankControl.formControl.value - 1);
  }

  down(rankControl: RankControl): void {
    if (rankControl.formControl.value === null) {
      return;
    }
    if (rankControl.formControl.value === this.ranked.length - 1) {
      rankControl.formControl.setValue(null);
      return;
    }
    this.ranked.find(rankControl1 => rankControl1.formControl.value === (rankControl.formControl.value != null ? rankControl.formControl.value + 1 : 0))
      ?.formControl.setValue(rankControl.formControl.value - 1);
    rankControl.formControl.setValue(rankControl.formControl.value + 1);
  }

  downDisabled(rankControl: RankControl): boolean {
    return rankControl.formControl.value === null;
  }

  upDisabled(rankControl: RankControl): boolean {
    return rankControl.formControl.value === 0;
  }
}

export interface RankControl {
  option: string;
  formControl: FormControl<number | null>
}
