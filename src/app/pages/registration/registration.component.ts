import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  registrationObj: any = {
    "registrationId": 0,
    "name": "",
    "mobileNo": "",
    "emailId": "",
    "linkdinProfileUrl": "",
    "isWorking": false,
    "collegeName": "",
    "city": "",
    "gender": ""
  }
  constructor(private http: HttpClient) {

  }


  onRegister() {
    this.http.post("https://freeapi.miniprojectideas.com/api/Webinar/CreateRegistration", this.registrationObj).subscribe((res:any)=>{
      if(res.result) {
        alert("Registration Successful");
      } else {
        alert(res.message);
      }
    })
  }
}
