import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import { InputGroup, InputGroupAddon } from '@/components/ui/input-group';
import { JobList } from '@/features/jobs/components/job-list';
import { MOCK_JOBS } from '@/features/jobs/data/mock-data';
import { DebouncedInput } from '@/features/shared/components/debounce-input';

export function BaseJobs() {
  return (
    <div className='px-4 space-y-4'>
      <div>
        <h2 className='text-xl font-semibold'>All Jobs</h2>
        <p className='text-sm text-muted-foreground mt-1'>Here are the jobs you've uploaded.</p>
      </div>

      {/* Search based on role, description, company, location */}
      <InputGroup className='max-w-sm'>
        <DebouncedInput value={''} onChange={(val) => console.log('Search: ', val)} placeholder='Search by company...' variant='group' />
        <InputGroupAddon>
          <MagnifyingGlassIcon weight='duotone' />
        </InputGroupAddon>
      </InputGroup>

      {/* Filter based on company_type, experience */}

      {/* Create job link */}

      {/* Job list */}
      <JobList jobs={MOCK_JOBS} />
    </div>
  );
}
