import paleta from "../styles/paleta";

export const ZEN = "";

export const ROUTE_COMPOSER = "/content/discover/Me/Composer/:composerId";
export const ROUTE_PERFORMERS = "/content/discover/Me/PerformersByInstrument";
export const ROUTE_PERFORMERS_INSTRUMENT = "/content/discover/Me/PerformersByInstrument/:idInstrument";
export const ROUTE_ENSEMBLES = "/content/discover/Me/Ensembles";
export const ROUTE_CONDUCTORS = "/content/discover/Me/PerformersByInstrument/10";
export const ROUTE_ALBUMS = "/content/discover/Me/Albums";
export const ROUTE_ALBUMS_BY_TEXT = "/content/discover/Me/Albums/:text";
export const ROUTE_ALBUMS_BY_ARTIST = "/content/discover/Me/AlbumsByArtist/:idArtist";
export const ROUTE_TRACKLIST = "/content/play/Me/TrackList";
export const ROUTE_KLASSIC_RANKS = "/content/discover/Me/KlassicRanks";
export const ROUTE_KLASSIC_RANK = "/content/discover/Me/KlassicRank/:idWork/:numPart";
export const ROUTE_PLAYLISTS = "/content/discover/Me/Playlists";
export const ROUTE_FAVS = "/content/Me/Favs";
export const ROUTE_PLAYLIST = "/content/play/Me/Playlist/:playlistId";
export const ROUTE_ALBUM = "/content/play/Me/Album/:albumId";
export const ROUTE_TRACKS = "/content/discover/Me/IDeezerTracks";
export const ROUTE_LABELS = "/content/discover/Me/ILabels";
export const ROUTE_SEARCH = "/content/discover/Me/Search";
export const ROUTE_RADIO = "/content/musicbox";
export const ROUTE_BLIND_TEST = "/content/quiz/blindTest";
export const ROUTE_BLIND_LAB = "/content/lab";
export const ROUTE_COMPOSER_WORK_ALBUMS = "/content/ComposersWork/Albums/:idWork";

export const ROUTE_MB_DEEZER = "/content/discover/MusicBrainzDeezer";

export const ROUTE_HOME = "/";
export const ROUTE_HOME_MENU = "/menu";
export const ROUTE_DISCOVER = "/content/discover";

export const SECONDARY_COLOR = paleta.color700;
export const SECONDARY_HEADER_COLOR = paleta.color200;

export const WEB_API_HOST = "http://MOISES-PC:50688/"; //'"http://MOISES-PC/Klassica/";

export const PLAYER_NO_PLAY_COLOR = "#edede7";
export const PLAYER_PLAY_COLOR = "#c4c4b0";

export const MARGIN_LEFT = 40;

export const PSEUDO_BLACK = "black"; //paleta.color900;
export const PSEUDO_WHITE = "rgb(253,253,253)";

export const HEADER_TITLE_BACKGROUND_COLOR = "white"; //"#fafafa";

export const HEADER_TITLE_HEIGHT = 80;

export const HEADER_MENU_HEIGHT = 34;

export const FUNNY_FONT = "Amatic SC";
export const SELECTED_COLOR = "#c4c4b0";
export const INFO_FONT = "Source Sans Pro";
export const BIG_JOHN = "Big John";
export const SLIM_JOE = "Slim Joe";
export const FUTURA_FONT = "Geomm";
export const ELEGANT_FONT = "Source Sans Pro";
export const HEADER_FONT = "Pasajero";
export const MATERIAL_FONT = "Roboto";
export const MTRULLASP_USER_ID = "1972520442";
export const NEXT_TRACK_KEY = 176;
export const PREV_TRACK_KEY = 177;
export const FONT_FAT = ELEGANT_FONT; //"Roboto"; //"MrAlex";
export const FONT_SLIM = "Nectar Regular";
export const FONT_SEMI_SLIM = "Nectar Bold";

export const ACCENT_COLOR = "#6D071A"; // "#FF2400"; //"#f05f2a";
export const SECOND_ACCENT_COLOR = "#454441";
export const INTENSE_ACCENT_COLOR = "#3e4351"; // "#D91E18";
export const URL_WEB_API = "http://moises-pc/nextWebApi/api/";
export const URL_WEB_API_DZK = "http://moises-pc/nextWebApiDzK/api/"; //"http://localhost:1885/api/";
export const MARGIN_HORITZONTAL = 100;
export const HEADER_HEIGHT = 60;
export const MARGIN_CONTENT_VERTICAL = 120;
export const SCROLLBAR_WIDTH = 15;
export const KEY_ENTER = 13;
export const LIMIT_COMPOSERS = 200;
export const COMPOSER_NUMBER_COLS = 6;
export const MAX_ITEMS_MASONRY = 500;
export const DEFAULT_NUM_MASONRY_COLUMNS = 4;

// keyboard
export const ARROW_UP = "ArrowUp";
export const ARROW_DOWN = "ArrowDown";
export const ARROW_LEFT = "ArrowLeft";
export const ARROW_RIGHT = "ArrowRight";

// Routes
export const ROUTE_COMPOSERS = "/composers";
export const ROUTE_COMPOSERS_ITEM = ROUTE_COMPOSERS + "/item";
export const ROUTE_COMPOSERS_COLLECTION = ROUTE_COMPOSERS + "/collection";
export const ROUTE_COMPOSERS_COLLECTION_BY_NACIO = ROUTE_COMPOSERS + "/collection/byNacio";
export const ROUTE_ALBUMS_COLLECTION = "/albums/collection";
export const ROUTE_ALBUM_TRACKS = "/album/:idAlbum/tracks";
export const ROUTE_WORK_VERSIONS = "/versions/:idWork/:idMCord";

export const ROUTE_PERFORMERSROL_COLLECTION = "/performers";
export const ROUTE_PERFORMER_COLLECTION = "/performers/rol/:idRol";
export const ROUTE_PERFORMER_ALBUMS = "/performer/:idMN/albums";

export const ROUTE_RANDOM_TRACK = "/track/random";

export const ROUTE_SEARCH_RESULTS = "/searchResults";
