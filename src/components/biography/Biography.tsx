import React from 'react';
import BiographyAd from './biography.mdx';
import avatar from '../../../static/img/cropped_image.png';
import Image from '@theme/IdealImage';

export function Biography(): React.JSX.Element {
    return (
        <div className='container flex flex-col justify-items-center p-7 md:mb-4 md:flex md:flex-row md:overflow-hidden md:p-20'>
            <div className=''>
                <h3 className='font-sans'>Introduction</h3>
                <br />
                <BiographyAd className='text-center' />
            </div>
            <div className='md:pt-20'>
                <Image className='' img={avatar as string}></Image>
            </div>
        </div>
    );
}
