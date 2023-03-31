import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ControlComponent } from './components/control/control.component';
import { ControlVolumeComponent } from './components/control-volume/control-volume.component';
import { ControlsComponent } from './components/controls/controls.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { TimeComponent } from './components/time/time.component';
import { VideoWrapperComponent } from './components/video-wrapper/video-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    ControlVolumeComponent,
    ControlsComponent,
    ProgressBarComponent,
    TimeComponent,
    VideoWrapperComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
