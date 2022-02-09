import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductMainComponent} from "./product-main/product-main.component";
import {ProductMainBrandComponent} from "./product-main-brand/product-main-brand.component";
import {TrangChuComponent} from "./trang-chu/trang-chu.component";
import {ProductDetailsComponent} from './product-details/product-details.component';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {path: 'trang-chu',component: TrangChuComponent},
  { path: 'gioi-thieu', loadChildren: () => import('./gioi-thieu/gioi-thieu.module').then(m => m.GioiThieuModule) },
  {path: ':productMains', component: ProductMainComponent,
    children: [
      { path: ':productMainBrands', component: ProductMainBrandComponent,
          children: [
            {path: ':productDetails', component: ProductDetailsComponent}
          ]
      }
    ]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
