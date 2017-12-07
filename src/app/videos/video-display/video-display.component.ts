import { Component, OnInit } from '@angular/core';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { VideoService } from '../video.service';
import { Video } from '../video.model';

@Component({
  selector: 'app-video-display',
  templateUrl: './video-display.component.html',
  styleUrls: ['./video-display.component.css']
})
export class VideoDisplayComponent implements OnInit {
  video: Video;
  safeUrl: SafeResourceUrl;

  constructor(private videoService: VideoService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
     this.videoService.videoSelected.subscribe(
       (video: Video) => {
         this.video = video;
         // this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.id);
       })
  }

}
