import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className='p-2'>
      <h3 className='text-2xl font-semibold'>Welcome!</h3>
      <Button asChild>
        <Link to='/r/dashboard'>
          View dashboard <ArrowRight />
        </Link>
      </Button>
    </div>
  );
}
