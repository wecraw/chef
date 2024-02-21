import { SafeUrl } from '@angular/platform-browser';

export interface ISong {
  name: string;
  spotifyUrl: SafeUrl;
  albumArtUrl: string;
  fontSize?: string;
  marginTop?: string;
}
