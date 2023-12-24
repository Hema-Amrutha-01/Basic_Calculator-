import { Component } from '@angular/core';

@Component({
  selector: 'app-trail2',
  templateUrl: './trail2.component.html',
  styleUrls: ['./trail2.component.css']
})
export class Trail2Component {
  x:string="";
  res:string="";
  number(number:number){
    this.x+=number.toString();
  }
  operator(operator:string){
    this.x+=' '+operator+' ';
  }
  result:number=0;
  eval(){
    try{
    this.res=eval(this.x).toString();
    }
    catch(error){
      this.res='Error';
    }
  }
  calculate(){
    this.eval();
    this.x=this.res;
  }
  clear(){
    this.x='';
    this.res='';
  }
}
