import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { VideoService } from '../video.service';
import { Video } from '../video.model';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit, OnDestroy {
    videoList: Video[];
    subscription: Subscription;

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    // Subcribe to videoListChanged event to update video list whenever
    // the list in Video Service has been updated
    this.subscription = this.videoService.videoListChanged.subscribe(
      (newVideoList: Video[]) => {
        this.videoList = newVideoList;
      }
    )
    // Populate the video list upon initialization
    this.videoService.getVideos();
  }

  onClick(id: number) {
    this.videoService.onVideoSelect(id);
  }

  ngOnDestroy() {
    // Prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
