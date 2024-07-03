import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit{
  constructor(){

  }
  ngOnInit(): void {

  }
  @Input() photoCover:string = "";
  @Input() titleCard:string = "";
  @Input() descriptionCard:string = "";
  @Input() Id:string ="0"
}
