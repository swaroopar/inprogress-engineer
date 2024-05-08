import React from 'react';
import Layout from '@theme/Layout';

import Talk, { TalkInfo } from '../components/talks/Talk';

import XpanseWithScs from './assets/xpanse-with-scs.md';

const talks: TalkInfo[] = [
    {
        title: 'Open Cloud Services and an Open Cloud Computing Stack: a full stack combination from infrastructure to application provision',
        description: <XpanseWithScs />,
        events: [
            {
                name: 'EclipseCon 2023',
                location: 'Ludwigsburg, Germany',
                date: new Date(2023, 10, 17),
            },
        ],
        recordingURL: 'https://www.youtube.com/watch?v=6InnOvfn2Kk',
        slidesURL:
            'https://github.com/eclipse-xpanse/xpanse-relops/blob/main/presentations/eclipsecon-2023-scs-xpanse.pdf',
    },
    {
        title: 'Eclipse xpanse - An Open Services Cloud Project',
        description: <XpanseWithScs />,
        events: [
            {
                name: 'EclipseCon 2023',
                location: 'Ludwigsburg, Germany',
                date: new Date(2023, 10, 17),
            },
        ],
        slidesURL: 'https://github.com/eclipse-xpanse/xpanse-relops/blob/main/presentations/eclipsecon-2023-xpanse.pdf',
        recordingURL: 'https://www.youtube.com/watch?v=99wqDZA1yVU&t',
        repoURL: 'https://github.com/eclipse-xpanse',
    },
];

const title = 'Talks';
const description = 'Featured talks I presented on various events.';

export default function Talks(): React.JSX.Element {
    return (
        <Layout title={title} description={description}>
            <main className='container container--fluid margin-vert--lg'>
                <h1>{title}</h1>
                <p>{description}</p>

                <div className='row'>
                    {talks.map((talkData) => (
                        <Talk key={talkData.title} talkInfo={talkData} />
                    ))}
                </div>
            </main>
        </Layout>
    );
}
