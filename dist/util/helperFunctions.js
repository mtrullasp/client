"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomNumber(array) {
}
function random(props) {
}
exports.random = random;
function randomArtistTrack(_a, artistID) {
    var id = _a.artist.id, track = _a.track, artistPlaylist = _a.artistPlaylist;
    if (artistID === void 0) { artistID = null; }
}
exports.randomArtistTrack = randomArtistTrack;
function fetchArtistData(id) {
}
function randomFlowTrack(props) {
}
exports.randomFlowTrack = randomFlowTrack;
function fetchAlbumData(id) {
}
function randomAlbumTrack(props, albumID) {
    if (albumID === void 0) { albumID = null; }
}
exports.randomAlbumTrack = randomAlbumTrack;
function fetchData(chosenPlaylist) {
}
function randomPlaylistTrack(props, playlistID) {
    if (playlistID === void 0) { playlistID = null; }
}
exports.randomPlaylistTrack = randomPlaylistTrack;
function searchArtist(id) {
}
function searchTopTracks(id) {
}
function searchAlbums(id) {
}
function searchSimilarArtists(id) {
}
function searchArtistInfo(track) {
    searchArtist(track.artist.id);
    searchTopTracks(track.artist.id);
    searchAlbums(track.artist.id);
    searchSimilarArtists(track.artist.id);
}
exports.searchArtistInfo = searchArtistInfo;
function login() {
}
exports.login = login;
