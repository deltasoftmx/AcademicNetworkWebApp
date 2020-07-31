import { ValidatorFn, FormGroup, ValidationErrors, AbstractControl } from '@angular/forms';

export const passwordMatch: ValidatorFn = (formGroup: FormGroup): ValidationErrors | null => {
  return formGroup.get('password').value === formGroup.get('password2').value ?
    null : { 'passwordMismatch': true };
}

//Se quitan los espacios en blanco
//de izquierda a derecha para validarlos.
export const whiteSpaces = (control: AbstractControl) => {
  if(control.value.toString().trim() === '') {
    return {hasWhiteSpaces: true};
  }
  return null;
}