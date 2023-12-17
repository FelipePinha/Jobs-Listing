import { JobCard } from '../JobCard';
import JobsData from '../../mocks/data';

export const Jobs = () => {
    return (
        <section className="mt-5 max-w-5xl mx-auto flex flex-col gap-5 p-5">
            <ul role="list">
                {JobsData.map(job => (
                    <li key={job.id}>
                        <JobCard item={job} />
                    </li>
                ))}
            </ul>
        </section>
    );
};
