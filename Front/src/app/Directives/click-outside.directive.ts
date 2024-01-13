import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {

  constructor(private el:ElementRef) { }

  @Output() public clickedOutside= new EventEmitter();
  @Output() public clickedInside= new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  public onClick(target:any){
    const clickInside= this.el.nativeElement.contains(target);
    if(clickInside){
      this.clickedOutside.emit(false);
    }
    else{
      this.clickedOutside.emit(true);
    }
  }
}
