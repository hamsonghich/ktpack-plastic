import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FirebaseService} from "../../../services/firebase.service";
import {AngularEditorConfig} from "@kolkov/angular-editor";

@Component({
  selector: 'app-form-gioi-thieu',
  templateUrl: './form-gioi-thieu.component.html',
  styleUrls: ['./form-gioi-thieu.component.scss']
})
export class FormGioiThieuComponent implements OnInit {
  public formGioithieu: FormGroup | any;
  public dataPatchValue: any;
  public isEdit = false;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '1rem',
    maxHeight: 'auto',
    placeholder: 'Enter text here...',
    translate: 'no',
    sanitize: false,
    toolbarPosition: 'top',
    fonts: [
      {class: 'foro', name: 'foro'},
      {class: 'hevatica-regular', name: 'hevatica-regular'},
      {class: 'hevatica-light', name: 'hevatica-light'},
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
  };

  constructor(public dialog: MatDialog, public fb: FormBuilder, public firebaseService: FirebaseService,
              public matDialogRef: MatDialogRef<FormGioiThieuComponent>) {
    this.formGioithieu = this.fb.group({
      contentGioithieu1: ['', Validators.required],
      imgLink: ['', Validators.required],
      commitCompany: ['', Validators.required],
      adviseCompany: ['', Validators.required],
    })

  }

  ngOnInit(): void {
    if (this.isEdit) {
      this.formGioithieu.patchValue(this.dataPatchValue);
    }
  }

  public onSubmit(): void {
    this.firebaseService.createFunctionalityObject(this.formGioithieu.value, '/gioi-thieu');
    this.matDialogRef.close();
  }

  public saveRowData(): any {
    this.matDialogRef.close({isEdit: true, data: this.formGioithieu.value});
  }
}
