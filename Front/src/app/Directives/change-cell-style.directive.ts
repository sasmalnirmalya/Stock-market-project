import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeCellStyle]'
})
export class ChangeCellStyleDirective {

  constructor(private ref: ElementRef) { 
    this.ref.nativeElement.backgroundColor = 'yellow'
  }

}
