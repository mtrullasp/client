export declare class PlayerStore {
    constructor();
    goPlaylistTracks(playlistId: number): void;
    tracks: Array<number>;
    playTracks(tracks: Array<number>, indexTrack: number): void;
    toggleTrack(trackId: number): void;
    sliderPlayClicked(e: any): void;
    trackIdIsPlaying: number;
    activeTrack: number;
    activeTrackIsFavorite: boolean;
    userId: string;
    toggleFavoriteTrack(idTrack: number): import("axios").AxiosPromise<any>;
    userid: string;
    secondsToTimeFormat(seconds: number): string;
    playerNext(): void;
    playerPrev(): void;
    playerIsPlaying: boolean;
}
