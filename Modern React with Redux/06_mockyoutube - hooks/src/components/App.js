import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('jorn starfire');

    useEffect(() => {
        let randVid = Math.floor(videos.length * Math.random()) - 1;
        randVid < 0 ? randVid = 0 : 
        setSelectedVideo(videos[randVid]);
    }, [videos]);
    /*
        
        */

    return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onTermSubmit={search} />
            Found {videos.length} videos
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList
                            videos={videos}
                            onVideoSelect={setSelectedVideo}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
