import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {
  @Input('appHighlighter') highlightColor: string;

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter')
  onmouseenter() {
    //console.log("mouseenter");
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave')
  onmouseleave() {
    //console.log("mouseleave");
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
