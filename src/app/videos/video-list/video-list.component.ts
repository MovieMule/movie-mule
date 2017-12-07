import { Component, OnInit, AfterViewInit } from '@angular/core';

import { VideoService } from '../video.service';
import { Video } from '../video.model';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit, AfterViewInit {
    videoList: Video[];

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videoList = this.videoService.getVideos();
  }

  ngAfterViewInit() {
    this.videoService.getTrailerPath();
  }

  onClick(id: number) {
    this.videoService.onVideoSelect(id);
  }

}
