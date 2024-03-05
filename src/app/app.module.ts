import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResidenceComponent } from './residence/residence.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app-routing.module';
import { AnnonceComponent } from './annonce/annonce.component';
import { ListannonceComponent } from './annonce/listannonce/listannonce.component';
import { AnnoceModule } from './annonce/annoce.module';
import { AnnoceRoutingModule } from './annonce/annoce-routing.module';
import { FormresidenceComponent } from './formresidence/formresidence.component';
import {HttpClientModule} from '@angular/common/http';
import { AppartmentComponent } from './appartment/appartment.component';
import { AddappartComponent } from './addappart/addappart.component';
import { UpdateappartComponent } from './updateappart/updateappart.component'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResidenceComponent,
    HomeComponent,
    NotfoundComponent,
    FormresidenceComponent,
    AppartmentComponent,
    AddappartComponent,
    UpdateappartComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AnnoceModule,
    ReactiveFormsModule,
    HttpClientModule
         
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
