import { IAlbum, IAlbumCredit, ITrackAlbum, ITrackRoot, ITracksView, ITrackTrack } from "../AlbumStore";

export interface ArtistMN {
  work: any[];
  idMN: string;
  nameMN: string;
  urlSource: string;
  ranking: number;
  urlImage: string;
  biographpy?: any;
  beginDate: Date;
  genre: string;
  lastUpdated: Date;
}

export interface Work {
  albumWorks: any[];
  artistMN: ArtistMN;
  idWork: string;
  nameWork: string;
  idComposerMN: string;
  composedDate: string;
  urlSource: string;
  workGenre: string;
  workType: string;
  description: string;
  descriptionAuthor: string;
  featured: string;
  performancesCount: number;
  atAgeOf: string;
}

export interface Track {
  idTrack: number;
  readable: string;
  title: string;
  title_short: string;
  title_version: string;
  isrc: string;
  link: string;
  share: string;
  duration: number;
  track_position: number;
  disk_number: number;
  rank: number;
  release_date: string;
  explicit_lyrics: string;
  preview: string;
  bpm: number;
  gain: number;
  type: string;
  idArtist: number;
  idAlbum: number;
  idWork: string;
  prestige: number;
  valoration?: any;
  idWorkOrd: number;
  numTrack: number;
  idDeezerTrack: number;
}

export interface AlbumWork {
  album?: IAlbum;
  work: Work;
  track: Array<Track>;
  idAlbum_DZ: number;
  idWork_AM: string;
  nb_tracks: number;
  wholeWork: boolean;
  idWork_AM_ord: number;
}

export interface IResponseAlbumTracksRoot {
  // Tracks: Array<ITracksView>;
  // AlbumWorks: Array<AlbumWork>;
  AlbumWorks: Array<ITracksView>;
  AlbumCredits: Array<IAlbumCredit>;
  Album: IAlbum;
  Track: Track;
}

