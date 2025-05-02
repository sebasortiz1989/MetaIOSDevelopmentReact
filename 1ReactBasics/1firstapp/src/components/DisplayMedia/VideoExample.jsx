import ReactPlayer from "react-player";

function VideoExample() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '45vh'}}>
            <h1>React Player Example</h1>
            <ReactPlayer url='https://www.youtube.com/watch?v=T8TZQ6k4SLE' playing={false} volume={0.5}/>
        </div>
    );
}

export default VideoExample;