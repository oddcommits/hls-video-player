import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() public max!: number;
  @Input() public value!: number;
  @Input() public label!: string;
  @Output() public input = new EventEmitter<MatSliderChange>();
  @Output() public change = new EventEmitter<MatSliderChange>();

  public inputHandler(event: MatSliderChange) {
    this.input.emit(event);
  }

  public changeHandler(event: MatSliderChange) {
    this.change.emit(event);
  }

  constructor() { }

  ngOnInit(): void {
  }
}
