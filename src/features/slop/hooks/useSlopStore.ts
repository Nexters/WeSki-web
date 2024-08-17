import { create } from 'zustand';

type SlopId = string | null;

interface CounterState {
  selectedSlop: SlopId;
  setSelectedSlop: (slopId: SlopId) => void;
}

const useSlopStore = create<CounterState>((set) => ({
  selectedSlop: null,
  setSelectedSlop: (slopId: SlopId) => set(() => ({ selectedSlop: slopId })),
}));

export default useSlopStore;
