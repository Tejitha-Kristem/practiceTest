import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';
import { switchMap } from 'rxjs/operators'
import { BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practicetest';
  data: any;
  rowdata: object;
  doModal: any;
  constructor(private ht: HttpClient, private m: BsModalService) {
    timer(0, 10000).pipe(switchMap(() => this.ht.get('https://reqres.in/api/users?page=2'))).subscribe(res => {
      var response: any = res;
      this.data = response.data
      console.log("response", this.data);

    })
  }
  onRowClick(i, modal) {
    this.rowdata = i;
    this.doModal = this.m.show(modal)
  }
}
