import { Component, OnInit } from '@angular/core';

import { VideoService } from '../video.service';
import { Video } from '../video.model';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
    videoList: Video[];

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videoList = this.videoService.getVideos();
  }

  onClick(id: number) {
    this.videoService.onVideoSelect(id);
  }

}
