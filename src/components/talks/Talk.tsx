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

interface EventInfo {
    name: string;
    location: string;
    date: Date;
}

export function Talk({ talkInfo }: { talkInfo: TalkInfo }) {
    return (
        <div className='w-full rounded-xl border-2 border-solid border-gray-300 p-10 sm:m-10'>
            <div>
                <div>
                    <h2>{talkInfo.title}</h2>
                </div>
                <div>
                    <div className='flex flex-grow flex-col flex-nowrap gap-2 md:flex-row md:gap-12'>
                        <div className='max-w-2xl text-justify'>{talkInfo.description}</div>
                        <div className='content-center'>
                            <EventDetails data={talkInfo.events} />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex flex-col gap-4 md:flex-row'>
                    <div>
                        {talkInfo.recordingURL && (
                            <a
                                href={talkInfo.recordingURL}
                                target='_blank'
                                className='button button--primary button--outline'
                            >
                                <div className='flex flex-row gap-1'>
                                    <Video className='pt-1' />
                                    <div className='pt-1'>Watch recording</div>
                                </div>
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
                                <div className='flex flex-row gap-1'>
                                    <Projector className='pt-1' />
                                    <div className='pt-1'>See slides</div>
                                </div>
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
                                <div className='flex flex-row gap-1'>
                                    <FolderGit className='pt-1' />
                                    <div className='pt-1'>See repository</div>
                                </div>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function EventDetails({ data }: { data: EventInfo[] }): React.JSX.Element {
    if (data.length === 0) {
        return null;
    }

    const [firstEvent, ...otherEvents] = data;
    const { name, location, date } = firstEvent;
    return (
        <div className='flex flex-row'>
            <div>
                <ul>
                    <div className="flex items-center">
                        <MessageSquareMore className="mr-2" height={18} />
                        {name}
                    </div>    
                    <div className="flex items-center">
                        <MapPin className="mr-2" height={18} />
                        {location}
                    </div>
                    <div className="flex items-center">
                        <Calendar className="mr-2" height={18} />
                        {formatDateString(date)}
                    </div>
                </ul>
            </div>
            {data.length > 1 && (
                <div>
                    <p>Also presented on:</p>
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
    return `${date.getMonth()}/${date.getUTCFullYear()}`;
}
