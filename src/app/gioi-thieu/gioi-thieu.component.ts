import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../services/firebase.service";

@Component({
  selector: 'app-gioi-thieu',
  templateUrl: './gioi-thieu.component.html',
  styleUrls: ['./gioi-thieu.component.scss']
})
export class GioiThieuComponent implements OnInit {
  public dataGioiThieu: any;
  constructor(public firebaseService: FirebaseService) {
    this.routingUrlTrangchu();

    this.firebaseService.readFunctionalityObject('/gioi-thieu').subscribe((res: any) => {
       this.dataGioiThieu = res;
    })
  }

  ngOnInit(): void {
  }
  public routingUrlTrangchu(){
    if (window.location.href.toString().includes('trang-chu')){
      return  false;
    }
    else{
      return  true;
    }
  }
}
