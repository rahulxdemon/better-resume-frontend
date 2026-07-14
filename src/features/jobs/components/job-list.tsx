import { JobListItem } from '@/features/jobs/components/job-list-item';
import type { TJobListItem } from '@/features/jobs/types/job';

interface JobListProps {
  jobs: TJobListItem[];
}

export function JobList({ jobs }: JobListProps) {
  return (
    <div className='grid grid-cols-3 gap-4'>
      {jobs.map((job) => (
        <JobListItem key={job.id} job={job} />
      ))}
    </div>
  );
}
