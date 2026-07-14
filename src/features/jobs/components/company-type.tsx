import { MoonIcon, StarIcon } from '@phosphor-icons/react';
import type { IJob } from '@/features/jobs/types/job';

interface CompanyTypeProps {
  companyType: IJob['company_type'];
}

export function CompanyType({ companyType }: CompanyTypeProps) {
  if (companyType === 'PRODUCT') return <StarIcon size={14} className='text-yellow-500' weight='duotone' />;
  return <MoonIcon size={14} className='text-sky-500' weight='duotone' />;
}
