import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisplayPriceCard]'
})
export class DisplayPriceCardDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { 
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#87CEEB');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
  }
  
}
