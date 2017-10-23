import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  videoList = [
    {
      name: "video 1",
      embed: "6wD4V0rvlDI"
    }
  ]
  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {}

  getEmbedUrl(item) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + item.embed)
  }

}
