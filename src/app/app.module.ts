import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { File } from '@ionic-native/file/ngx';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

export const firebaseConfig = {
  apiKey: "AIzaSyCKy__T6a1sC76hWE-B0isrVCZ8eV_BElM",
    authDomain: "andalvision.firebaseapp.com",
    databaseURL: "https://andalvision-default-rtdb.firebaseio.com",
    projectId: "andalvision",
    storageBucket: "andalvision.appspot.com",
    messagingSenderId: "396180421621",
    appId: "1:396180421621:web:a0be04cba0fcce1cc43ebc",
    measurementId: "G-CG3YY5KM73"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    VideoPlayer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
