<<<<<<< HEAD
import video from "../../video/v1.mp4";

function Video() {
  return (
    <div className="m-3 d-flex justify-content-center align-items-center">
      {video ? (
        <video
          width="102%"
          height="50%"
          allow="autoplay"
          autoPlay
          muted="muted"
          controls
          loop
          src={video}
        />
      ) : null}
    </div>
  );
}

export default Video;
=======
import video from "../../video/v1.mp4";

function Video() {
  return (
    <div className="m-3 d-flex justify-content-center align-items-center">
      {video ? (
        <video
          width="70%"
          height="50%"
          allow="autoplay"
          // autoPlay
          muted="muted"
          controls
          // loop
          src={video}
        />
      ) : null}
    </div>
  );
}

export default Video;
>>>>>>> 7a7e236b96e4826b37126ea089515647f5ba6407
