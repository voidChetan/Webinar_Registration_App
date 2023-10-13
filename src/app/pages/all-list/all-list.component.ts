import { HttpClient } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-all-list',
  templateUrl: './all-list.component.html',
  styleUrls: ['./all-list.component.css']
})
export class AllListComponent  implements OnInit{

  list: any [] = [];

  constructor(private http: HttpClient){}


  ngOnInit(): void {
    this.getAllRegistration();
  }
  getAllRegistration() {
    this.http.get("https://freeapi.miniprojectideas.com/api/Webinar/GetAllRegistration").subscribe((res: any)=>{
      this.list = res.data;
    })
  }
}
