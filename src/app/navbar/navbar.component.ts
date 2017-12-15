import { Component, OnInit } from '@angular/core';

import { VideoService } from '../videos/video.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private videoService: VideoService) { }

  ngOnInit() {
  }

  onClick(event) {
    console.log(typeof event.target.id);
    this.videoService.getVideos(event.target.id)
  }

}
