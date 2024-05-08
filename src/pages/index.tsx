import Layout from '@theme/Layout';
import React from 'react';
import { Biography } from '@site/src/components/biography/Biography';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function HomepageHeader() {
    return (
        <header className='bg-black p-10 pb-48 pt-48 text-right text-white'>
            <div className="container">
                <p className="text-md md:text-6xl">
                    Hi. I'm{' '}
                    <span className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
                        Swaroop Raghupathy
                    </span>
                    ,
                    <br />
                    Full-Stack Software Engineer.
                </p>
                <p className="text-md md:text-xl p-0 m-0">
                    An engineer in-progress
                </p>
                <p className='text-xs sm:text-xl'>Simplicity is the ultimate sophistication - Leonardo Da Vinci</p>
            </div>
        </header>
    );
}

export default function Home(): React.JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout description={siteConfig.tagline}>
            <HomepageHeader />
            <Biography />
        </Layout>
    );
}
