import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFirst]',
})
export class FirstDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

  // @Input() set backgroundColor(color: string) {
  //   this.elementRef.nativeElement.backgroundColor = color;
  // }
}
