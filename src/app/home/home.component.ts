import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor (private  router:Router){}
  logout(){
   
  
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
    
    
    
        } else {
         
          

           
    
        }
    
      })
  
    .catch(error => console.log('error', error));
  }
  
}
