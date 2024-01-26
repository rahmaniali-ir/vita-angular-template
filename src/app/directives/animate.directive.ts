import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[animate]',
  host: {
    '[class.animate]': 'true',
  },
})
export class AnimateDirective implements OnInit {
  @Input() animate: 'fade-in' | 'translate-in' | 'clip-in' = 'fade-in';
  @Input() delay: number = 0;
  @Input() once = true;

  @HostBinding('class.animate')
  private intersected = false;

  @HostBinding('class')
  get animation() {
    return this.animate;
  }

  @HostBinding('style.--animation-delay')
  get animationDelay() {
    return (this.delay ?? 0) + 's';
  }

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.updateViewportIntersection();
  }

  @HostListener('window:scroll')
  private updateViewportIntersection() {
    if (this.once && this.intersected) return;

    const { top, bottom } = this.el.nativeElement.getBoundingClientRect();

    this.intersected =
      (top > 0 && top < window.innerHeight) ||
      (bottom > 0 && bottom < window.innerHeight);
  }
}
