import { NgModule , CUSTOM_ELEMENTS_SCHEMA  } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { UserComponent } from "./user/user.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRouting} from './app.routing';
import { HomeComponent } from './home/home.component'

@NgModule({
  imports: [
    AppRouting,
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  declarations: [AppComponent, TopBarComponent, UserComponent, DashboardComponent, HomeComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
