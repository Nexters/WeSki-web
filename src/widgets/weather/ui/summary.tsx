import { cn } from '@/shared/lib';

interface SummaryProps {
  name: string;
  weather: number;
  temperature: number;
  congestion: string;
}

const Summary = ({ name, weather, temperature, congestion }: SummaryProps) => {
  return (
    <div className={cn('flex items-center justify-between bg-gray-100 p-6')}>
      <div>
        <p className="mb-1 font-bold">{name}</p>
        <div className={cn('flex items-end')}>
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.9067 22.8818C5.02369 21.7834 3.75696 19.7304 3.75696 17.3792C3.75696 14.4976 5.6591 12.0634 8.26748 11.2861C9.62827 8.14211 12.7386 5.94482 16.3559 5.94482C20.8467 5.94482 24.5551 9.33133 25.1038 13.7104C27.3136 14.2495 28.9549 16.2563 28.9549 18.6497C28.9549 20.4154 28.0616 21.9709 26.706 22.8818M11.6313 26.4181V18.5438M22.6554 26.4181V18.5438M17.1433 26.4181V18.5438"
              stroke="black"
              strokeWidth="2.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className={cn('ml-3 mr-1 text-3xl font-bold')}>{weather}</p>
          <p className={cn('text-xl font-bold opacity-50')}>{temperature}°C</p>
        </div>
      </div>
      <div className={cn('rounded-md bg-gray-400 px-3 py-1 text-sm font-bold text-white')}>
        {congestion}
      </div>
    </div>
  );
};

export default Summary;
