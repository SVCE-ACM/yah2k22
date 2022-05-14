import create from 'zustand';

export const snackBarStore = create((set) => ({
  message: '',
  open: false,
  isError: false,
  setOpen: (open) =>
    set((state) => ({
      ...state,
      open,
    })),
  setmessage: (message) =>
    set((state) => ({
      ...state,
      message: message,
    })),
  setIsError: (isError) =>
    set((state) => ({
      ...state,
      isError,
    })),
}));
