import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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
export class UIColorComponent implements OnInit {
  @ViewChild('funUI') funUI: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.setColor(0);
    this.setRandomColor();
  }


  private setRandomColor() {
    setTimeout(() => {
      this.setColor(Math.floor((Math.random() * 4) + 1));
      this.setRandomColor();
    }, Math.floor((Math.random() * 1000) + 1));
  }

  private setColor(color: number) {
    (this.funUI.nativeElement as HTMLDivElement).style.backgroundColor = colors[color];
  }
}
