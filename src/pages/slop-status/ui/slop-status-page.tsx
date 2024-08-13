import SlopStatusHeader from '@/widgets/header/ui/slop-status-header';
import SlopStatusList from '@/features/slop/ui/slop-status-list';
import { JISAN } from '@/entities/slop/model';
import { cn } from '@/shared/lib';

const SlopStatusPage = () => {
  const DUMMY = JISAN;
  return (
    <main className={cn('w-full px-[20px]')}>
      <SlopStatusHeader />

      <SlopStatusList list={DUMMY.slops} />
    </main>
  );
};

export default SlopStatusPage;
