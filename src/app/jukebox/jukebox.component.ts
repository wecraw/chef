import { Component } from '@angular/core';
import { ISong } from '../ISong';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-jukebox',
  templateUrl: './jukebox.component.html',
  styleUrls: ['./jukebox.component.scss'],
})
export class JukeboxComponent {
  constructor(private sanitizer: DomSanitizer) {}
  slideIn: boolean = true;
  slideOut: boolean = false;

  emptySong: ISong = {
    name: '',
    spotifyUrl: '',
    albumArtUrl: '',
  };

  leftSongs: ISong[] = [
    {
      name: 'Herbie Jam',
      fontSize: '14pt',
      spotifyUrl: this.sanitizeUrl(
        'https://open.spotify.com/embed/track/3msEvJljAOEYFE9oiLu98Z?utm_source=generator'
      ),
      albumArtUrl:
        'https://i.scdn.co/image/ab67616d0000b273b4fb25d641bf84cb5f5582b1',
    },
    {
      name: 'Kilgore',
      marginTop: '-4px',
      spotifyUrl: this.sanitizeUrl(
        'https://open.spotify.com/embed/track/2yXUcLQFQM8PGVOW2B9sMo?utm_source=generator'
      ),
      albumArtUrl:
        'https://i.scdn.co/image/ab67616d0000b273e41abb0bd75fff1f934e2cc7',
    },
  ];
  rightSongs: ISong[] = [
    {
      name: 'Peach Funk',
      fontSize: '14pt',
      spotifyUrl: this.sanitizeUrl(
        'https://open.spotify.com/embed/track/3nokHVueV9TLQrVEwzKsu3?utm_source=generator'
      ),
      albumArtUrl:
        'https://i.scdn.co/image/ab67616d0000b273b0a7cc01ebd0e0d025450e85',
    },
    this.emptySong,
  ];

  selectedSong: ISong = this.leftSongs[0];

  selectSong(event: MouseEvent, song: ISong) {
    if (song === this.selectedSong) {
      console.log('Song already selected');
      event.preventDefault();
    }
    if (song !== this.selectedSong) {
      this.slideOut = true;
      this.slideIn = false;
      setTimeout(() => {
        this.selectedSong = song;
        this.slideOut = false;
        this.slideIn = true;
      }, 400);
    }
  }
  sanitizeUrl(urlValue: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(urlValue);
  }

  getSourceUrl(song: ISong): SafeUrl {
    return song.spotifyUrl;
  }

  chefNames = [
    'Creative Hues Erupting Funk',
    'Chromatic Heat Energy Fusion',
    'Celestial Groove Evolutionary Force',
    'Conscious Harmonic Energy Flow',
    'Captivating Harmonic Eclectic Funk',
    'Cool Heat Embracing Funk',
    'Coupla Homies Emitting Frequencies',
    'Crazy Harmonic Euphoric Funk',
    'Creative Hues Erupting Funk',
    'Chromatic Heat Energy Fusion',
    'Celestial Groove Evolutionary Force',
    'Conscious Harmonic Energy Flow',
    'Captivating Harmonic Eclectic Funk',
    'Cool Heat Embracing Funk',
    'Coupla Homies Emitting Frequencies',
    'Crazy Harmonic Euphoric Funk',
    'Creative Hues Erupting Funk',
    'Chromatic Heat Energy Fusion',
    'Celestial Groove Evolutionary Force',
    'Conscious Harmonic Energy Flow',
    'Captivating Harmonic Eclectic Funk',
    'Cool Heat Embracing Funk',
    'Coupla Homies Emitting Frequencies',
    'Crazy Harmonic Euphoric Funk',
    'Creative Hues Erupting Funk',
    'Chromatic Heat Energy Fusion',
    'Celestial Groove Evolutionary Force',
    'Conscious Harmonic Energy Flow',
    'Captivating Harmonic Eclectic Funk',
    'Cool Heat Embracing Funk',
    'Coupla Homies Emitting Frequencies',
    'Crazy Harmonic Euphoric Funk',
  ];
}
