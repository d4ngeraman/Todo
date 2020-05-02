import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { FirstCharComponent } from './first-char/first-char.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

/* Module for Toaster */
import { ToastrModule } from 'ngx-toastr';


import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { MatDialogModule } from "@angular/material/dialog";

import { ListContainerComponent } from './list-container/list-container.component';
import { OwnNavbarComponent } from './own-navbar/own-navbar.component';
import { FriendsListComponent } from './friends-list/friends-list.component';

// import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatDialogModule,

    // NgbModule.forRoot(),
    
    ReactiveFormsModule,
    RouterModule,


    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),

  ],

  declarations: [ FirstCharComponent, DialogBoxComponent, ListContainerComponent, OwnNavbarComponent, FriendsListComponent],

  exports: [
    FirstCharComponent,
    DialogBoxComponent,
    ListContainerComponent,
    OwnNavbarComponent,
    FriendsListComponent,
    CommonModule,
    FormsModule
  ],

  entryComponents: [
    DialogBoxComponent
  ],

})
export class SharedModule { }