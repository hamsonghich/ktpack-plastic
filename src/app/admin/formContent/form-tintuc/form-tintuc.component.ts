import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FirebaseService} from "../../../services/firebase.service";
import {AngularEditorConfig} from "@kolkov/angular-editor";

@Component({
  selector: 'app-form-tintuc',
  templateUrl: './form-tintuc.component.html',
  styleUrls: ['./form-tintuc.component.scss']
})
export class FormTintucComponent implements OnInit {
  public formTintuc: FormGroup| any;
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
              public matDialogRef: MatDialogRef<FormTintucComponent>) {
    this.formTintuc = this.fb.group({
      content1: ['', Validators.required],
      content2: ['', Validators.required],
      content3: ['', Validators.required],
      content4: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    if (this.isEdit) {
      this.formTintuc.patchValue(this.dataPatchValue);
    }
  }
  public onSubmit(): void {
    this.firebaseService.createFunctionalityObject(this.formTintuc.value, '/tin-tuc');
    this.matDialogRef.close();
  }

  public saveRowData(): any {
    this.matDialogRef.close({isEdit: true, data: this.formTintuc.value});
  }

}
