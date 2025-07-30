
import ReactPlayer from 'react-player'

const ViedoPlayer = () => {
    return (
        <div className='flex justify-center items-center my-7 w-full rounded'>
            <ReactPlayer src='' className='w-full object-cover rounded ' width="100%" height="100%" fallback controls playIcon playing></ReactPlayer>
        </div>
    );
};

export default ViedoPlayer;