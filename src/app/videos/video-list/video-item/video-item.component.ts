import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Video } from '../../video.model';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent implements OnInit {
  @Input() video: Video;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=df67384ca445fcefa0f3c42e008ccafe&language=en-US&page=1').subscribe(
    //     (data) => {
    //       console.log(data);
    //     }
    // );
  }

}
