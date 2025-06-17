import React from 'react';

const SubTitle = ({title}) => {
    return (
        <div className='text-gray-300 lg:text-gray-400 font-semibold text-2xl leading-10 lg:leading-7 my-7 text-center'>
            {title}
        </div>
    );
};

export default SubTitle;