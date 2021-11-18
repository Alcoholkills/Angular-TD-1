import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-big-square',
  templateUrl: './big-square.component.html',
  styleUrls: ['./big-square.component.scss']
})
export class BigSquareComponent implements OnInit {

  @Input() received_square_color: string = '';
  @Output() big_square_color: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  send_color(color:string) {
    this.big_square_color.emit(color);
  }

}
