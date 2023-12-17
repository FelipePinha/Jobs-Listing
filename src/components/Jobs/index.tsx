import { JobCard } from '../JobCard';
import jobsData from '../../mocks/data.json';

export const Jobs = () => {
    return (
        <section className="mt-5 max-w-5xl mx-auto flex flex-col gap-5">
            <ul>
                {jobsData.map(job => (
                    <li key={job.id}>
                        <JobCard />
                    </li>
                ))}
            </ul>
        </section>
    );
};
