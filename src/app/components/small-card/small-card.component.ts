import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit {
  constructor(){

  }
  ngOnInit(): void {;
  }
  @Input() photoCover:string = "";
  @Input() descriptionCard:string = "";
}
