import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

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
  videoListChanged = new Subject<Video[]>();
  videoSelected = new Subject<Video>();
  selectedVideo: Video;

  constructor(private http: HttpClient) { };

  getVideos(filter: string = 'upcoming', pageCount: number = 1) {
    // parameter filter can be the following:
    // upcoming, popular, top_rated, now_playing

    this.http.get(`https://api.themoviedb.org/3/movie/${filter}?api_key=df67384ca445fcefa0f3c42e008ccafe&language=en-US&page=${pageCount}`).subscribe(
        (data) => {
          console.log(data);
          // Clear the videos array if there is already a list populated
          if (this.videos.length > 0) {
            this.videos = [];
          }
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
        this.emitVideoListChanged();
        }
    )
  }

  getTrailerPath(index: number) {
    // console.log(this.videos); //this.videos logs as an array of items, but cannot access one specific video in that array
    const movieId =this.videos[index].id;
    this.http.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=df67384ca445fcefa0f3c42e008ccafe&language=en-US`)
      .subscribe( (trailerData) => {
        this.videos[index].trailerKey = trailerData['results'][0]['key'];
        console.log(trailerData);
        this.selectedVideo = this.videos[index];
        this.videoSelected.next(this.selectedVideo);
      })
  }

  onVideoSelect(index: number) {
    this.getTrailerPath(index);

  }

  emitVideoListChanged() {
    this.videoListChanged.next(this.videos.slice());
  }

}
