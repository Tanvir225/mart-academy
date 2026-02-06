
import ReactPlayer from 'react-player'

const ViedoPlayer = () => {
    return (
        <div className='flex justify-center items-center my-7 w-full lg:max-w-5xl mx-auto rounded h-[270px] md:h-96 lg:h-[450px]'>
            <ReactPlayer src='' className='w-full object-cover rounded ' width="100%" height="100% " fallback controls playIcon playing></ReactPlayer>
        </div>
    );
};

export default ViedoPlayer;