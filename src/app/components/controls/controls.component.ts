import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { VideoService } from 'src/app/services/video.service';
import { VideoTimeService } from 'src/app/services/video-time.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  public playing = false;
  public currentProgress = 0;
  public duration = 0;
  public currentTime = 0;
  public label = "Audio volume";
  private videoEnded = false;

  constructor(
    private videoService: VideoService,
    private videoTimeService: VideoTimeService,
  ) {}

  public ngOnInit() {
    this.videoService
      .playingState$
      .subscribe(playing => (this.playing = playing));
    this.videoTimeService.videoDuration$.subscribe(
      duration => (this.duration = duration)
    );
    this.videoTimeService.videoProgress$.subscribe(
      progress => (this.currentProgress = progress)
    );
    this.videoService
      .videoEnded$
      .subscribe(ended => (this.videoEnded = ended));
  }

  public onPlayClick() {
    if (this.playing) {
      this.videoService.pause();
    } else {
      this.videoService.play();
    }
  }

  public onInput(event: MatSliderChange): void {
    this.videoTimeService.setIgnore(true);
    this.videoTimeService.setVideoProgress(event.value ?? 0);
  }

  public onChange(event: MatSliderChange) {
    this.videoTimeService.setIgnore(false);
    this.videoTimeService.setCurrentTime(event.value ?? 0);
  }

  public onFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      const videoPlayerDiv = document.querySelector('.video-player');
      videoPlayerDiv?.requestFullscreen();
    }
  }

  public get iconPlaying() {
    return this.videoEnded
      ? {
          name: 'Replay',
          value: 'replay'
        }
      : this.playing
      ? {
          name: 'Pause',
          value: 'pause'
        }
      : {
          name: 'Play',
          value: 'play_arrow'
        };
  }

  public ariaLabel() {
    return this.label;
  }
}
