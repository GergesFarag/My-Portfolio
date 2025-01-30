import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-landing',
  standalone: false,
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent implements OnInit , OnDestroy {
  constructor() {
  }
  ngOnInit(){
  }

  ngOnDestroy(): void {
  }
}
