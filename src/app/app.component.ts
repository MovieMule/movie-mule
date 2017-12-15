import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { VideoService } from './videos/video.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [VideoService]
})
export class AppComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {}

  // getEmbedUrl(item) {
  //   return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + item.embed)
  // }

}
