import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from "@angular/material/button";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import {ProductDetailsComponent} from "./product-details/product-details.component";
import { ProductMainComponent } from './product-main/product-main.component';
import { ProductMainBrandComponent } from './product-main-brand/product-main-brand.component';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from "@angular/material/icon";
import { FormLoginComponent } from './form-login/form-login.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {CarouselModule} from "ngx-owl-carousel-o";

@NgModule({
  declarations: [
    AppComponent,
    TrangChuComponent,
    ProductDetailsComponent,
    ProductMainComponent,
    ProductMainBrandComponent,
    HeaderComponent,
    FormLoginComponent,
    MenuHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatIconModule,
    FormsModule,
    MatExpansionModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
