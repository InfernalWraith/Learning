import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: 'Ready Steady Go', duration: '3:56' },
        { title: 'Starfire', duration: '5:01' },
        { title: 'No More Angels', duration: '3:25' },
        { title: 'Firestarter', duration: '3:31' }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
