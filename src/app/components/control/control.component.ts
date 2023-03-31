import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
  @Input() public icon!: string;
  @Input() public title!: string;

  constructor() { }

  ngOnInit(): void {
  }
}
