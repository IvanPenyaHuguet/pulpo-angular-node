import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {
  HeaderComponent,
  CardgroupComponent,
  CardComponent,
  FabbuttonComponent,
  ShowservicesComponent,
  CreateservicesComponent,
  FormarrayComponent,
  SelectunitComponent,
} from './components/ExportsComponents';
import { ServicesService } from './services/ExportServices';
import { TituloinputComponent } from './components/formcomponents/tituloinput/tituloinput.component';
import { PrecioinputComponent } from './components/formcomponents/precioinput/precioinput.component';
import { ErrormessageComponent } from './components/formcomponents/errormessage/errormessage.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowservicesComponent,
    CreateservicesComponent,
    HeaderComponent,
    CardgroupComponent,
    CardComponent,
    FabbuttonComponent,
    FormarrayComponent,
    SelectunitComponent,
    TituloinputComponent,
    PrecioinputComponent,
    ErrormessageComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ServicesService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
