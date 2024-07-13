import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class Luv2ShopValidators {


//     // whitespace  validation still not working properly 
//  static notOnlyWhitespace(control: FormControl): ValidationErrors | null {
    
//    //check if string only contains whitespace
//     if((control.value !=null) && (control.value.trim.length===0)){

//       //invalid, return error object
//       return {'notOnlyWhitespace' : true};
//     }
//     else {
     
//       //valid, return null
//       return null;   

//     }
   
//   }
  static notOnlyWhitespace(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
   
    
    const isWhitespace = ((control.value.trim().length === 0) && (control.value !=null));
    
    
    const isValid = !isWhitespace;
    return isValid ? null : { notOnlyWhitespace: true };
  };
    
 }

}
