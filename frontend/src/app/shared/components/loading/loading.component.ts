import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements AfterViewInit, OnChanges {
  @ViewChild('loadingInnerWrapper') loadingInnerWrapper: ElementRef<HTMLSpanElement> | undefined;
  @ViewChild('engineOne') engineOne: ElementRef<SVGPathElement> | undefined;
  @ViewChild('engineTwo') engineTwo: ElementRef<SVGPathElement> | undefined;

  @Input() sizeInPx: number = 16;
  @Input() color: string = 'var(--color-accent)';
  @Input() colorHover: string = 'var(--color-accent)';

  constructor() {}

  private changeColor(newColor: string): void {
    if (this.engineOne) this.engineOne.nativeElement.style.fill = newColor;
    if (this.engineTwo) this.engineTwo.nativeElement.style.fill = newColor;
  }

  ngAfterViewInit(): void {
    if (this.loadingInnerWrapper) {
      this.loadingInnerWrapper.nativeElement.style.width = `${this.sizeInPx}px`;
      this.loadingInnerWrapper.nativeElement.style.height = `${this.sizeInPx}px`;
    }
    this.changeColor(this.color);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changeColor(changes['color'].currentValue);
  }

  onHoverIn(): void {
    this.changeColor(this.colorHover);
  }

  onHoverOut(): void {
    this.changeColor(this.color);
  }
}
