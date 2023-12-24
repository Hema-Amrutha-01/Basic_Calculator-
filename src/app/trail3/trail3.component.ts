import { Component } from '@angular/core';

@Component({
  selector: 'app-trail3',
  templateUrl: './trail3.component.html',
  styleUrls: ['./trail3.component.css']
})

export class Trail3Component {
  num:number=0
  x:string=""
  l:string[][]=[[]];
  
  showTable : boolean = false;
  save_d(e:any){
    this.num=e.target.value;
  }
  toggleShowTable() {
    
    this.showTable = !this.showTable;

    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "n": this.num
});
var requestOptions = {
  method: 'POST',
  headers:{"Content-Type":"application/json"} ,
  body: raw,
};

fetch("http://localhost:8080/applicant", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result);
    if ("error" in result){
      console.log("Error occured");
      
    } else {
      this.l = result.result;
      console.log(result.result)
    }
  })
  
  .catch(error => console.log('error', error));

}
  

}
