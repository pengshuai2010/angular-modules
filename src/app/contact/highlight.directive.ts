import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlight], input'
})
export class ContactHighlightDirective {
  constructor(elem: ElementRef) {
    elem.nativeElement.style.backgroundColor = 'powderblue';
    console.log(`* contact highlight called for ${elem.nativeElement.tag}`);
  }
}
