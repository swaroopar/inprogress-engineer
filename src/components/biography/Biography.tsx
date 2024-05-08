import React from 'react';
import BiographyAd from './biography.mdx';
import avatar from '../../../static/img/cropped_image.png';
import Image from '@theme/IdealImage';

export function Biography(): React.JSX.Element {
    return (
        <div className='container justify-items-center flex max-h-15 overflow-hidden mb-4 p-20 font-sans'>
            <div className='w-1/2'>
                <h3 className='font-sans'>Introduction</h3>
                <br />
                <BiographyAd className='text-right' />
            </div>
            <div className='w-1/2'>
                <Image className='w-4/6 p-12' img={avatar as string}></Image>
            </div>
        </div>
    );
}
