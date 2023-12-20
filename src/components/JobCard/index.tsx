import { JobType } from '../../types/JobsTypes';
import { useContext, MouseEvent } from 'react';
import { FilterContext } from '../../contexts/FilterContext';

export const JobCard = ({ item, filterResults }: { item: JobType; filterResults: string[] }) => {
    const { addToFilter, filter } = useContext(FilterContext);

    const { languages, tools } = item;
    const langs = [...languages, ...tools];

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        const value = event.currentTarget;
        addToFilter(value.innerHTML);
    };

    return (
        <article
            data-testid="job-card"
            className={`relative mt-12 md:mt-5 bg-white shadow-md px-8 py-3 rounded-md ${
                filter.length === 0 ? 'block' : filterResults.length > 0 ? 'block' : 'hidden'
            }`}
        >
            <div className="flex flex-col gap-5 md:gap-0 md:flex-row md:justify-between md:items-center">
                <div className="flex gap-5 items-center py-8 border-b-2 border-darkCyan md:border-0">
                    <div className="w-16 h-16 absolute -top-6 left-4 md:static">
                        <img className="max-w-full" src={item.logo} alt={item.company} />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex gap-2 mb-1 items-center">
                            <h3 className="text-desaturatedDarkCyan font-bold">{item.company}</h3>
                            <span
                                className={`${
                                    item.new ? 'block' : 'hidden'
                                } font-bold text-white bg-desaturatedDarkCyan text-xs flex items-center rounded-full h-6 px-2`}
                            >
                                NEW!
                            </span>
                            <span
                                className={`${
                                    item.featured ? 'block' : 'hidden'
                                } text-white bg-veryDarkCyan text-sm h-6 px-3 flex items-center rounded-full font-bold`}
                            >
                                FEATURED
                            </span>
                        </div>
                        <h2 className="text-veryDarkCyan font-bold text-lg">{item.position}</h2>
                        <div className="flex gap-2">
                            <span className="text-darkCyan">{item.postedAt}</span>
                            <span className="text-darkCyan before:content-['\2022'] before:mr-2 after:content-['\2022'] after:ml-2">
                                {item.contract}
                            </span>
                            <span className="text-darkCyan">{item.location}</span>
                        </div>
                    </div>
                </div>
                <ul className="flex gap-3">
                    {langs.map(lang => (
                        <li key={lang}>
                            <button
                                onClick={handleClick}
                                className="h-6 px-4 rounded-md flex items-center bg-bgGrayishCyan text-desaturatedDarkCyan font-bold text-sm hover:bg-veryDarkCyan hover:text-lightCyan cursor-pointer"
                            >
                                {lang}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
};
