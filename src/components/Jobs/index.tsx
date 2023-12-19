import { JobCard } from '../JobCard';
import JobsData from '../../mocks/data';
import { useContext } from 'react';
import { FilterContext } from '../../contexts/FilterContext';

export const Jobs = () => {
    const { filter } = useContext(FilterContext);

    const filterResults = JobsData.map(item => {
        const { languages, tools } = item;
        const langs = [...languages, ...tools];

        return langs.filter(lang => {
            return filter.includes(lang);
        });
    });

    return (
        <section className="mt-10 max-w-5xl mx-auto flex flex-col gap-5 p-5">
            <ul role="list">
                {JobsData.map((job, index) => (
                    <li key={job.id}>
                        <JobCard item={job} filterResults={filterResults[index]} />
                    </li>
                ))}
            </ul>
        </section>
    );
};
