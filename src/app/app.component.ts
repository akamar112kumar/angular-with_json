import { Component } from '@angular/core';
import { JsoDataControlerService } from './jso-data-controler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myresult: any;
  constructor(private jsonData: JsoDataControlerService) {}
  ngOnInit() {
    this.jsonData.getData().subscribe((result: any) => {
      this.myresult = result.PersonalInfolistModel;
      console.log(this.myresult);
    });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
