import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Video(params) {
    return (
        <>
          <div className="ratio ratio-16x9">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/U1th94xR694" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         </div></>
      
    )
}
export default Video;

