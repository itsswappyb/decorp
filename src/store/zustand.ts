import { create } from "zustand";

interface EntityInfo {
  name?: string;
  ownerOrManagerNameOrAddress?: string;
  description?: string;
  type?: string;
  treasuryWalletAddress?: string;
  residentialAddress?: string;
}

type EntityStore = {
  entity: EntityInfo | null;
  add: (entity: EntityInfo) => void;
  remove: () => void;
};

export const useEntityStore = create<EntityStore>((set) => ({
  entity: {
    name: "",
    ownerOrManagerNameOrAddress: "",
    description: "",
    type: "",
    treasuryWalletAddress: "",
    residentialAddress: "",
  }, // Initial values

  // add new values to the existing entity
  // add: (entity) => (state: any) => set({ ...state.entity, entity }),
  add: (entity) => set({ entity }),

  remove: () =>
    set({
      entity: {
        name: "",
        ownerOrManagerNameOrAddress: "",
        description: "",
        type: "",
        treasuryWalletAddress: "",
        residentialAddress: "",
      },
    }), // Reset to empty state
}));
