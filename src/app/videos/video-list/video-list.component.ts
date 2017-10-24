import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
    videoList = [
    {
      name: "video 1",
      poster_path: "http://placekitten.com/200/300",
      description: "This is a movie trailer",
      embed_id: "6wD4V0rvlDI"
    },
    {
      name: "video 2",
      poster_path: "http://placekitten.com/200/300",
      description: "This is a movie trailer",
      embed_id: "6wD4V0rvlDI"
    },
    {
      name: "video 3",
      poster_path: "http://placekitten.com/200/300",
      description: "This is a movie trailer",
      embed_id: "6wD4V0rvlDI"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
