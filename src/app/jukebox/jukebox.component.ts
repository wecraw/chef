import { Component } from '@angular/core';
import { ISong } from '../ISong';

@Component({
  selector: 'app-jukebox',
  templateUrl: './jukebox.component.html',
  styleUrls: ['./jukebox.component.scss'],
})
export class JukeboxComponent {
  emptySong: ISong = {
    name: '',
    spotifyUrl: '',
    albumArtUrl: '',
  };

  leftSongs: ISong[] = [
    {
      name: 'Herbie Jam',
      spotifyUrl:
        'https://open.spotify.com/embed/track/3msEvJljAOEYFE9oiLu98Z?utm_source=generator',
      albumArtUrl:
        'https://i.scdn.co/image/ab67616d0000b273b4fb25d641bf84cb5f5582b1',
    },
    {
      name: 'Kilgore',
      spotifyUrl:
        'https://open.spotify.com/embed/track/2yXUcLQFQM8PGVOW2B9sMo?utm_source=generator',
      albumArtUrl:
        'https://i.scdn.co/image/ab67616d0000b273e41abb0bd75fff1f934e2cc7',
    },
  ];
  rightSongs: ISong[] = [
    {
      name: 'Herbie Jam',
      spotifyUrl:
        'https://open.spotify.com/embed/track/3msEvJljAOEYFE9oiLu98Z?utm_source=generator',
      albumArtUrl:
        'https://i.scdn.co/image/ab67616d0000b273b4fb25d641bf84cb5f5582b1',
    },
    this.emptySong,
  ];

  selectedSong: ISong = this.leftSongs[0];

  selectSong(index: number, isLeft: boolean) {
    if (isLeft) {
      this.selectedSong = this.leftSongs[index];
    } else {
      this.selectedSong = this.rightSongs[index];
    }
  }
}
