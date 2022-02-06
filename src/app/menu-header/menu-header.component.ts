import { Component, OnInit } from '@angular/core';
import {NgbAccordionConfig} from "@ng-bootstrap/ng-bootstrap";
import {FirebaseService} from "../services/firebase.service";

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {
  public dataMainList: any[] = [];
  public dataMainBrandList: any[] = [];
  public dataHeader: any[] =  [];
  constructor(public firebaseService: FirebaseService) {
    this.firebaseService.readFunctionalityObject('/productMain/productMainList').subscribe((res: any[]) => {
      this.dataMainList = res;
      this.firebaseService.readFunctionalityObject('/productMainBrand/productMainBrandList').subscribe((res: any[]) => {
        this.dataMainBrandList = res;
        for (let i = 0 ; i < this.dataMainList.length; i++){
          this.dataHeader[i] = [];
          for(let j = 0; j < this.dataMainBrandList.length; j++){
            if(this.dataMainList[i].link === this.dataMainBrandList[j].nameMain){
              this.dataHeader[i].push(this.dataMainBrandList[j]);
            }
          }
        }
      })
    })
  }

  ngOnInit(): void {
  }

}
