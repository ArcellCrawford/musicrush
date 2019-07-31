import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {IonicImageViewerModule} from 'ionic-img-viewer';
//import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { DeviceMotion, DeviceMotionAccelerationData,DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';
// import { filter } from 'rxjs/operators';
// import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation/ngx';
// import { Pedometer } from '@ionic-native/pedometer/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [ BrowserModule,IonicModule.forRoot(),AppRoutingModule, HttpClientModule],
  providers: [
    // BackgroundGeolocation,
    // Geolocation,
    // DeviceMotion,
    StatusBar,
    SplashScreen,
    IonicImageViewerModule,
    //Pedometer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy,}
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
