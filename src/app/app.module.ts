import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {WeatherService} from './weather.service';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

const appRoutes=[
  {
    path:'',
    component:HomeComponent
  },  
  {
    path:'home',
    component:HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
