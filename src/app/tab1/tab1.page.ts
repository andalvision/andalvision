import { Component } from '@angular/core';
//import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { VideoPlayer, VideoOptions } from '@ionic-native/video-player/ngx';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  videoOptions: VideoOptions
  constructor(private videoPlayer: VideoPlayer) {}
  invokeVideoPlayer(){
    this.videoOptions = {
      volume: 0.7
    };
  }  
  playOfflineVideo() {
    this.videoPlayer.play('file:///../../assets/www/videos/soum.mp4').then(() => {
      console.log('video finished');
    }).catch(error => {
      console.log(error);
    });
  }
  playOnlineVideo() { 
    this.videoPlayer.play('https://www.youtube.com/watch?v=nhrYbhQJ5Sg').then(() => {
      console.log('video finished');
    }).catch(error => {
      console.log(error);
    });
  }

  closeVideoPlayer() {
    this.videoPlayer.close();
  }
}
