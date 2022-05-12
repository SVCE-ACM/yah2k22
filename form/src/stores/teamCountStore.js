import create from 'zustand';

export const teamCountStore = create((set) => ({
  count: 0,

  setCount: (count) =>
    set((state) => ({
      ...state,
      count,
    })),
}));
