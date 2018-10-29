import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { CsvUploadComponent } from './maps/csv-upload/csv-upload.component';
import { PercentwithaccountComponent } from './maps/percentwithaccount/percentwithaccount.component';
import { PercentBillableComponent } from './maps/percentBillable/percentBillable.component';
import { PercentLeavesComponent } from './maps/percentLeaves/percentLeaves.component';
import { GuardService } from './authentic/guard.service';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    // {
    //     path:'admin', component:SidebarComponent,canActivate:[GuardService]
    // },
    {
        path:'csvupload', component:CsvUploadComponent,canActivate:[GuardService]
    },
    {
        path:'percentwithaccount',component:PercentwithaccountComponent,canActivate:[GuardService]
    },
    {
        path:'percentBillable',component:PercentBillableComponent,canActivate:[GuardService]
    },
    {
        path:'percentLeaves',component:PercentLeavesComponent,canActivate:[GuardService]
    }
];