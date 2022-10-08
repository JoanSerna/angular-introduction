import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEvenColor]',
})
export class EvenColorDirective implements OnInit {
  @Input() par: boolean | undefined

  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2,
  ) {
  }

  ngOnInit(): void {
    if (this.par) {
      this.renderer2.setStyle(
        this.elementRef.nativeElement,
        'background-color',
        'red',
      )
    }
  }

}
