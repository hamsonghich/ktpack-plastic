import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {FirebaseService} from "../services/firebase.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormLoginComponent} from "../form-login/form-login.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public keywordSearch: any;
  public dataInfoFB = {
    address: '',
    email: '',
    hotline: '',
    imgLogo: '',
    tonchi: '',
    map: '',
    nameCompany: '',
    phoneNumber1: '',
    phoneNumber2: '',
    website: '',
  }
  constructor(public dataServicesService: DataService, public firebaseService: FirebaseService, public dialog: MatDialog) {
    this.firebaseService.readFunctionalityObject('/info-company').subscribe((res: any) => {
      this.dataInfoFB = res;
    })
  }

  ngOnInit(): void {
  }
  public toggleMenu(): any{
    document.getElementsByClassName('container-listMenuTop')[0].classList.toggle('active');
  }
  public login(): any{
    this.dialog.open(FormLoginComponent, {
      height: '400px', width: '350px'
    });
  }
  public openContentList(){
    const screenMobile__content = document.getElementsByClassName('screenMobile__content')[0] as HTMLElement;
    screenMobile__content.classList.toggle('active');
  }

}
