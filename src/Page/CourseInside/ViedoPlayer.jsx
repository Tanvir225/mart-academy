
import ReactPlayer from 'react-player'

const ViedoPlayer = () => {
    return (
        <div className='flex justify-center items-center my-7 w-full rounded h-[270px] md:h-96 lg:h-[450px] xl:h-[700px]'>
            <ReactPlayer src='' className='w-full object-cover rounded ' width="100%" height="100% " fallback controls playIcon playing></ReactPlayer>
        </div>
    );
};

export default ViedoPlayer;