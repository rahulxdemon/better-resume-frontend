import { ArrowRightIcon, ArrowSquareOutIcon, CalendarDotsIcon } from '@phosphor-icons/react';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CompanyType } from '@/features/jobs/components/company-type';
import type { TJobListItem } from '@/features/jobs/types/job';
import { dateAndTimeFormatter } from '@/features/shared/utils/date';

interface JobListItemProps {
  job: TJobListItem;
}

export function JobListItem({ job }: JobListItemProps) {
  return (
    <Card key={job.id}>
      <CardHeader>
        <CardTitle>{job.title}</CardTitle>
        <CardDescription>
          <p className='flex items-center justify-start gap-1'>
            {job.company}
            <CompanyType companyType={job.company_type} />
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className='line-clamp-3'>{job.description}</p>
        <p className='text-muted-foreground flex items-center justify-start gap-1.5 pt-2'>
          <CalendarDotsIcon size={14} weight='duotone' />
          {dateAndTimeFormatter.format(new Date(job.created_at))}
        </p>
      </CardContent>
      <CardFooter className='mt-auto'>
        <ButtonGroup className='justify-end w-full'>
          <ButtonGroup>
            <Button size={'icon-sm'} variant={'secondary'} asChild>
              <a href={job.source_url} target='_blank' rel='noopener'>
                <ArrowSquareOutIcon weight='duotone' />
              </a>
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size={'sm'} asChild>
              <Link to='/r/jobs/$job_id' params={{ job_id: job.id }}>
                View Job <ArrowRightIcon weight='duotone' />
              </Link>
            </Button>
          </ButtonGroup>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
