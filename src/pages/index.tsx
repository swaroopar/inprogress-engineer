import Layout from '@theme/Layout';
import React from 'react';
import { Biography } from '@site/src/components/biography/Biography';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function HomepageHeader() {
    return (
        <header className='bg-black text-white p-10 text-left pt-48 pb-48'>
            <div className='container'>
                <h1 className='text-6xl'>
                    Hi. I'm{' '}
                    <span className='bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent'>
                        Swaroop Raghupathy
                    </span>
                    ,
                    <br />
                    Full-Stack Software Developer.
                </h1>
                <p className='font-sans text-xl'>
                    An engineer in-progress.
                    <br /> Simplicity is the ultimate sophistication - Leonardo Da Vinci
                </p>
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
