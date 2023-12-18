import { JobType } from '../../types/JobsTypes';
import { useContext, MouseEvent } from 'react';
import { FilterContext } from '../../contexts/FilterContext';

export const JobCard = ({ item }: { item: JobType }) => {
    const { addToFilter } = useContext(FilterContext);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        const value = event.currentTarget;
        addToFilter(value.innerHTML);
    };

    return (
        <article className="mt-5 bg-white shadow-md px-8 py-3 rounded-md">
            <div className="flex justify-between items-center">
                <div className="flex gap-5 items-center">
                    <div className="w-16 h-16">
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
                    {item.languages.map(lang => (
                        <li key={lang}>
                            <button
                                onClick={handleClick}
                                className="h-6 px-4 rounded-md flex items-center bg-bgGrayishCyan text-desaturatedDarkCyan font-bold text-sm hover:bg-veryDarkCyan hover:text-lightCyan cursor-pointer"
                            >
                                {lang}
                            </button>
                        </li>
                    ))}
                    {item.tools.map(tool => (
                        <li key={tool}>
                            <button
                                onClick={handleClick}
                                className='className="h-6 px-4 rounded-md flex items-center bg-bgGrayishCyan text-desaturatedDarkCyan font-bold text-sm hover:bg-veryDarkCyan hover:text-lightCyan cursor-pointer"'
                            >
                                {tool}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
};
