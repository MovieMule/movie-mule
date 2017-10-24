import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VideosComponent } from './videos/videos.component';
import { VideoListComponent } from './videos/video-list/video-list.component';
import { VideoDisplayComponent } from './videos/video-display/video-display.component';
import { VideoItemComponent } from './videos/video-list/video-item/video-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VideosComponent,
    VideoListComponent,
    VideoDisplayComponent,
    VideoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
