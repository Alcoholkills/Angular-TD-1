import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-small-square',
  templateUrl: './small-square.component.html',
  styleUrls: ['./small-square.component.scss']
})

export class SmallSquareComponent implements OnInit {

  @Input() small_square_color: string = '';
  @Output() new_color: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { 
  }

  ngOnInit(): void {
  }

  ngOnChange(): void {
  }

}