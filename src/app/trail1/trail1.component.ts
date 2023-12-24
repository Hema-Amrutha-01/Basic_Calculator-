import { Component } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({

  selector: 'app-trail1',

  templateUrl: './trail1.component.html',

  styleUrls: ['./trail1.component.css']

})

export class Trail1Component {
  x:string="";

  re:string="";

  r:string="";
  k:string="he"
receivedData:string="hii";

constructor( public dataSharingService :DataSharingService){

  this.receivedData=this.dataSharingService.sharedData;}

  evaluate(e:any){

    this.re=e.target.value;

    // this.x=eval(e.target.value);

    var myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");

 

  var raw = JSON.stringify({

    "expression": e.target.value

  });

 

  var requestOptions = {

    method: 'POST',

    headers: {"Content-Type": "application/json"},

    body: raw

  };

 

  fetch("http://localhost:80/calculate", requestOptions)

    .then(response => response.json())

    .then(result => {

      console.log(result);

      if ("error" in result){

        console.log("Error Occured");

        this.x = "Error Occured"

      } else {

        this.x = result.result;

      }

    })

    .catch(error => console.log('error', error));

    }

 



   save_data( ){

     

      var myHeaders = new Headers();

     

      myHeaders.append("Content-Type", "application/json");

   

      var raw = JSON.stringify({

      "expression": this.re });

 

      var requestOptions = {

      method: 'POST',

      headers: {"Content-Type": "application/json"},

      body: raw   };

     

      fetch("http://localhost:8080/applican", requestOptions)

    .then(response => response.json())

    .then(result => {

    console.log(result);

    if ("error" in result){

    console.log("Error Occured");

    this.r = "Error Occured"

     }

     else {


    this.r =result.result;

  }

})
  .catch(error => console.log('error', error));

 
 

 


 

 

 

   }

}
