import { Component } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

res=""
isLoggedIn:boolean=false;
k:string="";
u:string="";
p:string="";
share:string="hell";
show=false



logout_user(){
  this.isLoggedIn=false;
  this.u="";
  this.p="";

  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({});

var requestOptions = {
  method: 'POST',
  headers: {"Content-Type": "application/json"},
  body: raw,
  
};

fetch("http://localhost:8080/icant", requestOptions)
  .then(response => response.json)
  .then(result =>
    { 
      console.log(result);
      if ("error" in result){
  
        console.log("Error Occured");
  
        this.k = "Error Occured"
  
      } else {
        this.res= "Logout Successful";
          this.show=false;
          this.k="";
  
      }
  
    })

  .catch(error => console.log('error', error));
}


submit_user( ){

  this.isLoggedIn=true;


  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "user": this.u,
  "password": this.p
});

var requestOptions = {
  method: 'POST',
  headers: {"Content-Type": "application/json"},
  body: raw,
};

fetch("http://localhost:8080/can", requestOptions)
  .then(response => response.json())
  .then(result =>{ 
    console.log(result);
    if ("error" in result){

      console.log("Error Occured");

      this.k = "Error Occured"

    } else {
      this.k = result.result;
      this.res="";
      console.log(result.result);

    }

  }
  )
  .catch(error => console.log('error', error));
}
}