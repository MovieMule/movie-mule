import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Video } from './video.model';

// interface videoResponse {
//   results['title']: string
// }
const imageBasePath = 'https://image.tmdb.org/t/p/w500';

interface VideoResponse {
  results: string[];
}

@Injectable()
export class VideoService {
  videos: Video[] = [
    new Video(
      'Fight Club',
      '1393824',
      `${imageBasePath}/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg`
    ),
    new Video(
      'Fight Club',
      '1393824',
      `${imageBasePath}/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg`
    ),
    new Video(
      'Fight Club',
      '1393824',
      `${imageBasePath}/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg`
    ),

  ]
 videoSelected = new EventEmitter<Video>();
 selectedVideo: Video;

  constructor(private http: HttpClient) { };

  getVideos() {

    this.http.get<VideoResponse>('https://api.themoviedb.org/3/movie/upcoming?api_key=df67384ca445fcefa0f3c42e008ccafe&language=en-US&page=1').subscribe(
        (data) => {

          data.results.forEach( (item) => {
            this.videos.push(
              new Video(
                item['title'],
                item['id'],
                imageBasePath + item['poster_path']
              )
            )
          });
        }
    );

    return this.videos;
  }
  onVideoSelect(id: number) {
    this.selectedVideo = this.videos[id];
    this.videoSelected.emit(this.selectedVideo);
  }

  getSelectedVideo() {
    //return this.selectedVideo;
  }
}
