import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisplayRatioCard]'
})
export class DisplayRatioCardDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'brown');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
   }

}
