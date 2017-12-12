import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Video } from './video.model';

// interface videoResponse {
//   results['title']: string
// }
const imageBasePath = 'https://image.tmdb.org/t/p/w500';

// interface VideoResponse {
//   results: object[];
// }

@Injectable()
export class VideoService {
  videos: Video[] = [];
  videoSelected = new EventEmitter<Video>();
  selectedVideo: Video;

  constructor(private http: HttpClient) { };

  getVideos() {

    this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=df67384ca445fcefa0f3c42e008ccafe&language=en-US&page=1').subscribe(
        (data) => {
          console.log(data);
          data['results'].forEach( (item) => {
            this.videos.push(
              new Video(
                item['title'],
                item['id'],
                imageBasePath + item['poster_path'],
                ''
              )
            );
          });
        }
    )
    return this.videos;
  }

  getTrailerPath(index: number) {
    // console.log(this.videos); //this.videos logs as an array of items, but cannot access one specific video in that array
    const movieId =this.videos[index].id;
    this.http.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=df67384ca445fcefa0f3c42e008ccafe&language=en-US`)
      .subscribe( (trailerData) => {
        this.videos[index].trailerKey = trailerData['results'][0]['key'];
        console.log(trailerData);
        this.selectedVideo = this.videos[index];
        this.videoSelected.emit(this.selectedVideo);
      })
  }

  onVideoSelect(index: number) {
    this.getTrailerPath(index);

  }

  getSelectedVideo() {
    //return this.selectedVideo;
  }
}
