import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import {GoogleChart} from './google-chart-directives/angular2-google-chart.directive';
import { AuthService } from './authentic/auth.service';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
// import { AppRoutingModule } from './app-routing.module';
import { appRoutes } from './app.routes';
import { CsvUploadComponent } from './maps/csv-upload/csv-upload.component';
import { PercentwithaccountComponent } from './maps/percentwithaccount/percentwithaccount.component';
import { HeaderComponent } from './header/header.component';
import { GuardService } from './authentic/guard.service';
import { CsvuploadService } from './authentic/csvupload.service';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    SidebarComponent,
    CsvUploadComponent,
    PercentwithaccountComponent,
    GoogleChart,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [AuthService,GuardService,CsvuploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
