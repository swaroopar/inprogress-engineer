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
                <div className='flex flex-shrink-0 justify-center md:justify-end'>
                    <Image className='h-64 w-64 md:h-80 md:w-80' img={avatar as string}></Image>
                </div>
            </div>
        </div>
    );
}
