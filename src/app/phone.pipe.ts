import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any, ...args: any[]): string {
    console.log(value);
   let phonestr:string = value.toString(); 
   if(phonestr.length > 9){
      return "+7("+phonestr.substring(0, 3)+")"+phonestr.substring(3, 6)+"-"+phonestr.substring(6, 8)+"-"+phonestr.substring(8, 10);
   }
    return value;
   
  }

}
