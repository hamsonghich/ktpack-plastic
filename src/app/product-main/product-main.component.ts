import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {DataService} from "../services/data.service";
import {FirebaseService} from "../services/firebase.service";

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.scss']
})
export class ProductMainComponent implements OnInit {
  public dataTotalProduct: any[] = [];
  public dataproductMainList: any[] = [];
  public productMainID: Observable<any> | any;
  dataProductMain: any[] = [];
  public checkUrlHidden = false;
  public dataItemProductTotal: any; // giá trị của từng sản phẩm
  constructor(public activatedRoute: ActivatedRoute, public dataServices: DataService, public firebaseService: FirebaseService) {
    console.log(window.location.href);
    const url = window.location.href.toString();
    console.log(url.slice(10, url.length).split('/').length - 1);
    const checkLoop = url.slice(10, url.length).split('/').length - 1;
    if(checkLoop >= 2){
      this.checkUrlHidden = true;
    }
  }

  ngOnInit(): void {
    this.firebaseService.readFunctionalityObject('/productMain/productMainList').subscribe((res: any[]) => {
      this.dataproductMainList = res;
      this.dataproductMainList.forEach(item => {
        console.log(item.link);

        this.activatedRoute.paramMap.subscribe(params => {
          this.productMainID = params.get('productMains');
          console.log('productMainID: ' + this.productMainID);
          this.dataProductMain.splice(0, this.dataProductMain.length);
          if(this.checkUrlHidden){
                // check meta tag product main
          }else{
            if(item.link === this.productMainID){
              item.productMainListMetaGoogle.forEach((item1: { itemprop: any; }) => {
                //KEY THE META GOOGLE
                console.log(item1.itemprop);

              })
              item.productMainListMetaProperty.forEach((item1: { content: any; }) => {
                //KEY THE META FACEBOOK
                console.log(item1.content);

              })
              item.productMainListMetaName.forEach((item1: { content: any; }) => {
                //KEY THE META HTML
                console.log(item1.content);

              })
            }
          }
          this.firebaseService.readFunctionalityList('/productDetails').subscribe((res: any[]) => {
             this.dataTotalProduct = res;
            for (let i = 0; i < this.dataTotalProduct.length; i++) {
              console.log(this.dataTotalProduct[i].productMain);
              if (this.dataTotalProduct[i].productMain === this.productMainID) {
                this.dataProductMain.push(this.dataTotalProduct[i]);
              }
            }
          })

        })

      })
    })
    // this.activatedRoute.paramMap.subscribe(params => {
    //   this.productMainID = params.get('productMains');
    //   console.log('productMainID: ' + this.productMainID);
    //   this.dataProductMain.splice(0, this.dataProductMain.length);
    //
    //   for (let i = 0; i < this.dataServices.dataTotalProductDetails.length; i++) {
    //     // tslint:disable-next-line:prefer-for-of
    //     if (this.dataServices.dataTotalProductDetails[i].productMain.link === this.productMainID) {
    //       this.dataProductMain.push(this.dataServices.dataTotalProductDetails[i]);
    //     }
    //   }
    // })
  }

}
