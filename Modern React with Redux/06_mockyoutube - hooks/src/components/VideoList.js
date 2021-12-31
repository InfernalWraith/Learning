import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        // Fix apostrophes
        video.snippet.title = video.snippet.title.replace("&#39;", "'")

        return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
    })

    return(
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    );
}

export default VideoList;
