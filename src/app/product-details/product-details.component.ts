import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../services/data.service";
import {FirebaseService} from "../services/firebase.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public productDetailsID: Observable<any> | any;
  public dataProductDetails: any[] = [];
  public dataTotalProduct: any[] = [];
  constructor(public activatedRoute: ActivatedRoute, public dataServices: DataService, public firebaseService: FirebaseService) {
    console.log(window.location.href);
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.productDetailsID = params.get('productDetails');
      console.log('productDetailsID: ' + this.productDetailsID);

      this.firebaseService.readFunctionalityList('/productDetails').subscribe((res: any[]) => {
        this.dataTotalProduct = res;
        for (let i = 0; i < this.dataTotalProduct.length; i++) {
          // tslint:disable-next-line:prefer-for-of
          if (this.dataTotalProduct[i].productDetails.link === this.productDetailsID) {
            this.dataProductDetails.push(this.dataTotalProduct[i]);
          }
        }
      })

    });
  }

}
