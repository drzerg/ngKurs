import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  public consoleText(arg){
    console.log(arg);
  }
  constructor() { }
}
