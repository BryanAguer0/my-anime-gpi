import { Directive, ElementRef, Host, HostListener, inject, input, output } from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]',
})
export class InfiniteScroll {
  onScroll = output<void>()
  scrollWindow = input<boolean>(true)
  threshold = input<number>(100)
  hasTriggered: boolean = false

  private elementRef = inject(ElementRef<HTMLElement>)

  @HostListener("window:scroll")
  onWindowScroll() {
    if (!this.scrollWindow()) return;
    if (this.isWindowatBottom()) {
      if (!this.hasTriggered) {
        this.onScroll.emit();
        this.hasTriggered = true;
        console.log("Scroll")
      }
    }
    else {
      this.hasTriggered = false;
    }
  }
  @HostListener("scroll")
  onElementScroll() {
    if (this.scrollWindow()) return;
    if (this.isElementatBottom()) {
      this.onScroll.emit()
    }
  }
  private isWindowatBottom(): boolean {
    const scrollTop = window.scrollY;
    const viewPortHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;
    return scrollTop + viewPortHeight >= fullHeight - this.threshold()
  }
  private isElementatBottom(): boolean {
    const element = this.elementRef.nativeElement;
    return element.scrollTop + element.clientHeight >= element.scrollHeight - this.threshold()
  }
}
