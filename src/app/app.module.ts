import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLeftComponent } from './components/menu-left/menu-left.component';
import { AllProfilesComponent } from './pages/all-profiles/all-profiles.component';
import { LoginComponent } from './pages/login/login.component';
import { ConnectionsComponent } from './pages/connections/connections.component';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewAccountComponent } from './pages/new-account/new-account.component';
import { Step1Component } from './pages/new-account/step-1/step-1.component';
import { Step2Component } from './pages/new-account/step-2/step-2.component';
import { BoxLeftComponent } from './pages/new-account/box-left/box-left.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgxMaskDirective, provideEnvironmentNgxMask } from 'ngx-mask';
import { CardProfileComponent } from './components/card-profile/card-profile.component';
import { ProfileDetailsComponent } from './pages/profile-details/profile-details.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuLeftComponent,
    AllProfilesComponent,
    LoginComponent,
    ConnectionsComponent,
    ButtonComponent,
    NewAccountComponent,
    Step1Component,
    Step2Component,
    BoxLeftComponent,
    LayoutPageComponent,
    SpinnerComponent,
    ModalComponent,
    CardProfileComponent,
    ProfileDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxMaskDirective
  ],
  providers: [provideEnvironmentNgxMask()],
  bootstrap: [AppComponent],
})
export class AppModule {}
