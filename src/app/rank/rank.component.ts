import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RankComponent),
      multi: true
    }
  ]
})
export class RankComponent implements ControlValueAccessor, OnInit {

  @Input() options: string[] = [];
  formGroup: FormGroup = new FormGroup({
    formArray: new FormArray<FormControl<number | null>>([])
  });

  onTouched = (obj: any) => { };
  onChange = (obj: any) => { };

  ngOnInit(): void {
    this.options.forEach(o => {
      this.formArray.push(new FormControl<number | null>(null));
    });
  }

  get formArray(): FormArray<FormControl<number | null>> {
    return this.formGroup.get('formArray') as FormArray<FormControl<number | null>>;
  }

  get value(): (number | null)[] {
    return this.formArray.value;
  }

  writeValue(obj: (number | null)[] | null): void {
    this.onChange(obj);
    this.onTouched(obj);
    if (obj) {
      this.formArray.setValue(obj);
    }
  }

  registerOnChange(fn: (obj: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: (obj: any) => {}): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.formGroup.disable();
    } else {
      this.formGroup.enable();
    }
  }

}
