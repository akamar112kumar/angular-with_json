import { Component, OnInit } from '@angular/core';
import { JsoDataControlerService } from '../jso-data-controler.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // myresult: any;
  // constructor(private jsonData: JsoDataControlerService) {}
  // ngOnInit() {
  //   this.jsonData.getData().subscribe((result: any) => {
  //     this.myresult = result.PersonalInfolistModel;
  //     console.log(this.myresult);
  //   });
  // }
  constructor() {}
  ngOnInit(): void {}
}
