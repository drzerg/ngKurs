import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css']
})
export class SocioComponent implements OnInit {
  @Input() title: string; 
  @Input() img: string; 
  @Input() following: number; 
  @Input() followers: number; 
  constructor() { }

  ngOnInit() {
  }

}
