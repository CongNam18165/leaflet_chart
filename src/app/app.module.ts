import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletComponent } from './leaflet/leaflet.component';
import { HeaderComponent } from './header/header.component';
import { ChartComponent } from './chart/chart.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { NumberFormatPipe } from './number-format.pipe';
import { DateFormatPipe } from './date-format.pipe';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    LeafletComponent,
    HeaderComponent,
    ChartComponent,
    NumberFormatPipe,
    DateFormatPipe
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    LeafletModule,
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    
  ],
  providers: [DataService,DateFormatPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
