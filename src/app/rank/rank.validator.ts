import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const validateRank: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    // const value = control.value.filter((v: number | null) => !!v).sort() as number[];
    // if (!value || !value.length) {
    //     console.log('nothing')
    //     return null;
    // }
    // if (value.length !== [...new Set(value)].length) {
    //     console.log('duplicates')
    //     return {
    //         'duplicates': 'Duplicate ranks - please review',
    //     }
    // }
    // if (value.includes(0) || value.some(v => v > value.length)) {
    //     console.log('invalidValue')
    //     return {
    //         'invalidValue': 'Invalid rank - please review',
    //     }
    // }
    // console.log('valid')
    return null;
}