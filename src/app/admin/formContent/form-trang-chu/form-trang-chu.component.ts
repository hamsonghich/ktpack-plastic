import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FirebaseService} from "../../../services/firebase.service";

@Component({
  selector: 'app-form-trang-chu',
  templateUrl: './form-trang-chu.component.html',
  styleUrls: ['./form-trang-chu.component.scss']
})
export class FormTrangChuComponent implements OnInit {
  public formTrangchu: FormGroup| any;
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
              public matDialogRef: MatDialogRef<FormTrangChuComponent>) {
    this.formTrangchu = this.fb.group({
      imgRight: this.fb.array([
        this.fb.group({
          name: '',
          link: '',
          linkRouting: '',
        }),
        this.fb.group({
          name: '',
          link: '',
          linkRouting: '',
        }),
        this.fb.group({
          name: '',
          link: '',
          linkRouting: '',
        })
      ]),
      imgLeft: this.fb.array([
        this.fb.group({
          name: '',
          link: '',
          linkRouting: '',
        }),
        this.fb.group({
          name: '',
          link: '',
          linkRouting: '',
        }),
        this.fb.group({
          name: '',
          link: '',
          linkRouting: '',
        })
      ]),

    })
  }

  ngOnInit(): void {
    if (this.isEdit) {
      this.formTrangchu.patchValue(this.dataPatchValue);
    }
  }
  getImgRight(){
    return this.formTrangchu.get('imgRight') as  FormArray;
  }
  getImgLeft(){
    return this.formTrangchu.get('imgLeft') as  FormArray;
  }

  public onSubmit(): void {
    this.firebaseService.createFunctionalityObject(this.formTrangchu.value, '/trang-chu');
    this.matDialogRef.close();
  }

  public saveRowData(): any {
    this.matDialogRef.close({isEdit: true, data: this.formTrangchu.value});
  }

}
