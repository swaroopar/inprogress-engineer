import WhyInProgress from './assets/why-inprogress.md';
import Layout from '@theme/Layout';
import React from 'react';

export default function WhyInProgressEngineer(): React.JSX.Element {
    return (
        <Layout title={'Why In-Progress Engineer'}>
            <main className='container mx-auto pt-10 md:text-justify'>
                <h1>Why In-Progress Engineer</h1>
                <WhyInProgress />
            </main>
        </Layout>
    );
}
