import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  u:string="";
  p:string="";
  rp:string="";
  r:string="";
 submit_reg(){
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "user": this.u,
  "password": this.p,
  "repass": this.rp
});

var requestOptions = {
  method: 'POST',
  headers: {"Content-Type":"application/json"},
  body: raw,
 
};

fetch("http://localhost:8080/cant", requestOptions)
  .then(response => response.json())

  .then(result => 
    {
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
