import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FirebaseService} from "../../../services/firebase.service";
import {FormTintucComponent} from "../../formContent/form-tintuc/form-tintuc.component";


@Component({
  selector: 'app-content-tintuc',
  templateUrl: './content-tintuc.component.html',
  styleUrls: ['./content-tintuc.component.scss']
})
export class ContentTintucComponent implements OnInit {
  public dataFormTintucFB = {
    content1: '',
    content2: '',
    content3: '',
    content4: '',
  };
  constructor(public dialog: MatDialog, public firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.readFunctionalityObject('/tin-tuc').subscribe((res: any) => {
      this.dataFormTintucFB = res;
    })
  }

  openFormTintuc() {
    this.dialog.open(FormTintucComponent, {
      height: '600px', width: '800px'
    })
  }

  updateFormTintuc(rowData: any) {
    const dialogRef = this.dialog.open(FormTintucComponent, {
      height: '600px', width: '800px'
    })
    dialogRef.componentInstance.isEdit = true;
    dialogRef.componentInstance.dataPatchValue =  rowData;
    dialogRef.afterClosed().subscribe(res => {
      if (res  && res.isEdit && res.data){
        this.firebaseService.updateFunctionality(res.data , '/tin-tuc');
      }
    });
  }
}
