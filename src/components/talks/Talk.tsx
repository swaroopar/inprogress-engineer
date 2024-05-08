import React from 'react';
import { Calendar, FolderGit, MapPin, MessageSquareMore, Projector, Video } from 'lucide-react';

export interface TalkInfo {
    title: string;
    description: React.ReactNode;
    events: EventInfo[];
    recordingURL?: string;
    slidesURL?: string;
    repoURL?: string;
}

export interface EventInfo {
    name: string;
    location: string;
    date: Date;
}

export function Talk({ talkInfo }: { talkInfo: TalkInfo }) {
    return (
        <div className='margin-bottom--lg padding--lg border-slate-100 border-solid border-2 rounded-xl w-full'>
            <div>
                <div>
                    <h2>{talkInfo.title}</h2>
                </div>
                <div>
                    <div className='flex flex-row flex-nowrap  flex-grow justify-items-start gap-8'>
                        <div className='max-w-2xl'>{talkInfo.description}</div>
                        <div className='inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10 col-span-2'></div>
                        <div className='content-center'>
                            <EventDetails data={talkInfo.events} />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex flex-row gap-4'>
                    <div>
                        {talkInfo.recordingURL && (
                            <a
                                href={talkInfo.recordingURL}
                                target='_blank'
                                className='button button--primary button--outline'
                            >
                                <Video />
                                Watch recording
                            </a>
                        )}
                    </div>
                    <div>
                        {talkInfo.slidesURL && (
                            <a
                                href={talkInfo.slidesURL}
                                target='_blank'
                                className='button button--secondary button--outline'
                            >
                                <span className=''>
                                    <Projector />
                                </span>
                                See slides
                            </a>
                        )}
                    </div>
                    <div>
                        {talkInfo.repoURL && (
                            <a
                                href={talkInfo.repoURL}
                                target='_blank'
                                className='button button--secondary button--outline'
                            >
                                <span className=''>
                                    <FolderGit />
                                </span>
                                See repository
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function EventDetails({ data }: {data: EventInfo[]}): React.JSX.Element {
    if (data.length === 0) {
        return null;
    }

    const [firstEvent, ...otherEvents] = data;
    const { name, location, date } = firstEvent;
    return (
        <div className='row'>
            <div>
                <ul>
                    <li>
                        <MessageSquareMore height={18} />
                        {name}
                    </li>
                    <li>
                        <MapPin height={18} />
                        {location}
                    </li>
                    <li>
                        <Calendar height={18} />
                        {formatDateString(date)}
                    </li>
                </ul>
            </div>
            {data.length > 1 && (
                <div className='col col--12'>
                    <p className='margin--none'>Also presented on:</p>
                    <ul>
                        {otherEvents.map(({ name, location, date }) => (
                            <li key={name}>
                                <strong>{name}</strong> in {location} ({formatDateString(date)})
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

function formatDateString(date: Date): string {
    return `${date.getMonth() + 1}/${date.getUTCFullYear()}`;
}

export default Talk;
