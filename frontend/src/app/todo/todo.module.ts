import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module'

import { TodoRoutingModule } from './todo-routing.module';
import { SingleUserComponent } from './single-user/single-user.component';
import { MultiUserComponent } from './multi-user/multi-user.component';

/* Module for Toaster */
import { ToastrModule } from 'ngx-toastr';
  
  import { MatButtonModule } from '@angular/material/button';
  import {MatFormFieldModule} from '@angular/material/form-field';
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
  import { MatTabsModule } from "@angular/material/tabs";

import { DialogBoxComponent } from '../shared/dialog-box/dialog-box.component';

import { ListContainerComponent } from '../shared/list-container/list-container.component';
import { ManageFriendsComponent } from './manage-friends/manage-friends.component';

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
    MatTabsModule,
    ReactiveFormsModule,
    RouterModule,

    SharedModule,
    
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),

    TodoRoutingModule
  ],

  entryComponents: [
    DialogBoxComponent
  ],
  declarations: [SingleUserComponent, MultiUserComponent, ManageFriendsComponent]
})
export class TodoModule { }
