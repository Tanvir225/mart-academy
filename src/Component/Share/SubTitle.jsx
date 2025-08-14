import React from 'react';

const SubTitle = ({title}) => {
    return (
        <div className='text-gray-200 lg:text-gray-300 animate-pulse font-semibold text-xl leading-10 lg:leading-7 my-7 text-center'>
            {title}
        </div>
    );
};

export default SubTitle;