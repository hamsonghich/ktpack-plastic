import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {DataService} from "../services/data.service";
import {FirebaseService} from "../services/firebase.service";

@Component({
  selector: 'app-product-main-brand',
  templateUrl: './product-main-brand.component.html',
  styleUrls: ['./product-main-brand.component.scss']
})
export class ProductMainBrandComponent implements OnInit {
  public productMainBrandID: Observable<any>|any;
  dataProductMainBrand: any[] = [];
  dataTotalProduct: any[] = [];
  public checkUrlHidden = false;
  constructor(public activatedRoute: ActivatedRoute, public dataServices: DataService, public firebaseService: FirebaseService) {
    console.log(window.location.href);
    const url = window.location.href.toString();
    console.log(url.slice(10, url.length).split('/').length - 1);
    const checkLoop = url.slice(10, url.length).split('/').length - 1;
    if(checkLoop >=3){
      this.checkUrlHidden = true;
    }
  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      this.productMainBrandID = params.get('productMainBrands');
      console.log('productMainBrandID: ' + this.productMainBrandID);
      this.dataProductMainBrand.splice(0, this.dataProductMainBrand.length);

      this.firebaseService.readFunctionalityList('/productDetails').subscribe((res: any[]) => {
        this.dataTotalProduct = res;
        for (let i = 0; i < this.dataTotalProduct.length; i++) {
          // tslint:disable-next-line:prefer-for-of
          if (this.dataTotalProduct[i].productMainBrand === this.productMainBrandID) {
            this.dataProductMainBrand.push(this.dataTotalProduct[i]);
          }
        }
      })



    })

  }

}
