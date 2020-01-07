import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ApiService } from './api.service';
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

  constructor(private ser: ApiService, private modalService: BsModalService) {
    this.ser.getData().subscribe(res => {
      var response: any = res;
      this.data = response.data
      console.log("response", this.data);
    })
  }

  onRowClick(i, modal) {
    var modalSize = { class: 'modal-lg' }
    this.rowdata = i;
    this.doModal = this.modalService.show(modal, modalSize)
  }

}
