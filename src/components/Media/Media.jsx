import React from 'react';
import './Media.css';

const Media = () => {
    return (
        <>
            <div className="media_content_body_back">
                <div className="container">
                    <div className="media_video_content_body">
                        <iframe width="100%" height="565px" src="https://www.youtube.com/embed/hpZwCRInrgo?si=ah2CU7Qna5iYeN4D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Media;
