import { create } from 'zustand';

const initialState = {
  app_data: null,
  projects_data: null,
};

interface Store {
  app_data: any;
  setAppData: (app_data: any) => void;
}

const useAppStore = create<Store>((set, get) => ({
  ...initialState,
  setAppData: (app_data) => {
    set({ app_data });
  },
}));

export default useAppStore;
