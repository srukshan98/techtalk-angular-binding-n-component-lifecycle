import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, Renderer2, ViewChild } from '@angular/core';

const colors = [
  'green',
  'yellow',
  'purple',
  'white'
];

@Component({
  selector: 'app-uicolor',
  templateUrl: './uicolor.component.html',
  styleUrls: ['./uicolor.component.scss']
})
export class UIColorComponent implements AfterViewInit, OnChanges {
  @ViewChild('funUI') funUI: ElementRef;
  @Input() in: number;

  constructor(
    private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    console.log('after view init');
    this.setColor(0);
    this.setRandomColor();
  }

  ngOnChanges(): void {
    console.log('Change Detected');
  }

  private setRandomColor() {
    setTimeout(() => {
      this.setColor(Math.floor((Math.random() * 4) + 1));
      this.setRandomColor();
    }, Math.floor((Math.random() * 1000) + 1));
  }

  private setColor(color: number) {
    this.renderer.setStyle(this.funUI.nativeElement, 'backgroundColor', colors[color]);
  }

  ngOnDestroy(): void {
    console.log('On Destroy');
  }
}
