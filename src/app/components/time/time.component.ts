import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  @Input() public duration!: number;
  @Input() public currentProgress!: number;

  public padZeros(value = 0, padding = 2) {
    return `${Math.floor(value)}`.padStart(padding, '0');
  }

  public get durationMinutes() {
    return this.duration / 60;
  }

  public get durationSeconds() {
    return this.duration - (Math.floor(this.durationMinutes) * 60);
  }

  public get currentMinutes() {
    return this.currentProgress / 60;
  }

  public get currentSeconds() {
    return this.currentProgress - (Math.floor(this.currentMinutes) * 60);
  }

  constructor() { }

  ngOnInit(): void {
  }
}
