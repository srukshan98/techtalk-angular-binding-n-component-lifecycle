import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  num: number = 0;

  ngOnInit(): void {
    setTimeout(() => this.num = 2, 5000);
  }
}
