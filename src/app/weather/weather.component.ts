import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css', './weather-icons.css']
})
export class WeatherComponent implements OnInit {
@Input() title: string; 
@Input() icon: string; 
@Input() water: number; 
@Input() temperature: number; 

  constructor() { }

  ngOnInit() {
  }

}
