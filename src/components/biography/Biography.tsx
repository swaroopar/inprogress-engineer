import React from 'react';
import BiographyAd from './biography.mdx';
import avatar from '../../../static/img/cropped_image.png';
import Image from '@theme/IdealImage';

export function Biography(): React.JSX.Element {
    return (
        <div className='container p-7 md:mb-4 md:overflow-hidden md:p-20'>
            <h3 className='font-sans'>Introduction</h3>
            <br />
            <div className='flex flex-col justify-items-center md:flex md:flex-row md:items-center'>
                <div className=''>
                    <BiographyAd />
                </div>
                <div className='flex-shrink-0 flex justify-center md:justify-end'>
                    <Image className='w-64 h-64 md:w-80 md:h-80' img={avatar as string}></Image>
                </div>
            </div>
        </div>
    );
}
