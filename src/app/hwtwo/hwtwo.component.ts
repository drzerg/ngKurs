import { Component } from '@angular/core';
import { GithubServiceService } from '../github-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hwtwo',
  templateUrl: './hwtwo.component.html',
  styleUrls: ['./hwtwo.component.css']
})
export class HwtwoComponent  {
findText:string;
response: any;

  constructor(private http: HttpClient) {
    
   }

 find(){
  this.http.get('https://api.github.com/search/repositories?q=' + this.findText)
  .subscribe( (response)=>{
    this.response = response;
    console.log(this.response);
  })
 }

}
