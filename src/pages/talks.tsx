import React from 'react';
import Layout from '@theme/Layout';

import { Talk, TalkInfo } from '../components/talks/Talk';

import XpanseWithScs from './assets/xpanse-with-scs.md';
import XpanseStandalone from './assets/xpanse-standalone.md';
import XpanseOpenInfraDay from './assets/xpanse-open-infra-day.md';

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
        description: <XpanseStandalone />,
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
    {
        title: 'OSC and SCS: A Full stack for deploying from instrastructure to applications',
        description: <XpanseOpenInfraDay />,
        events: [
            {
                name: 'Openinfra Day 2024',
                location: 'Budapest, Hungary',
                date: new Date(2024, 6, 3),
            },
        ],
        slidesURL:
            'https://github.com/eclipse-xpanse/xpanse-relops/blob/main/presentations/openinfra-2024-budapest-osc.pdf',
        recordingURL: 'https://youtu.be/2pNo8F3AMrw?t=1630',
        repoURL: 'https://github.com/eclipse-xpanse',
    },
];

const title = 'Event Presentations';
const description = 'Spoke on various topics in multiple events. ';

export default function Talks(): React.JSX.Element {
    return (
        <Layout title={title} description={description}>
            <main className='container mx-auto pt-4'>
                <h1>{title}</h1>
                <p>{description}</p>

                <div className='row'>
                    {talks.map((talkData: TalkInfo) => (
                        <Talk key={talkData.title} talkInfo={talkData} />
                    ))}
                </div>
            </main>
        </Layout>
    );
}
