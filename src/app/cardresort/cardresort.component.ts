import { Component, OnInit } from '@angular/core';
import { IResorts, resorts$ } from 'src/mock/resorts';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-cardresort',
  templateUrl: './cardresort.component.html',
  styleUrls: ['./cardresort.component.css']
})
export class CardresortComponent implements OnInit {
  title = 'hw1';
  public resorts$:Observable<IResorts[]> = resorts$;
  public resorts: IResorts[];
  public type:string;
  public res:IResorts[];
  public currentRes;
  public menu = [];
  
  public ngOnInit():void{
    this.resorts$.subscribe( (resorts:IResorts[])=>{
      this.resorts = resorts;
      this.res = this.resorts;
    } );
    this.getResortByType;
    this.currentRes = this.res[0];
    this.setMenu(this.resorts);
  }

  public getResortByType(type){
    console.log(type);
    
    this.res = this.resorts.filter(function(resort){
      return resort.type == type;
      
    });
    this.currentRes = this.res[0];
    //return res;
  }
  public setCurrentRes(resClick){
    this.currentRes = resClick;
  }

  public setMenu(resorts){
   
    for (let key in resorts) {
      console.log(resorts[key].type);
      if(this.menu.indexOf(resorts[key].type) == -1){
        this.menu.push(resorts[key].type);
      }
    
    }
 
  }

}
