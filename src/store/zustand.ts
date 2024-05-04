import { create } from "zustand";

// Entity Name
// Entity Description
// Entity Type
// Entity Treasury Wallet Address
// Entity Residential Address (Default BVI Address / Smart Contract Address for DAO)
interface EntityInfo {
  name: string;
  description: string;
  type: string;
  treasuryWalletAddress: string;
  residentialAddress: string;
}

type EntityStore = {
  entities: EntityInfo[];
  add: (entity: EntityInfo) => void;
  remove: (entityName: string) => void;
  removeAll: () => void;
};
export const useEntityStore = create<EntityStore>((set) => ({
  entities: [], // Initialize as an empty array

  add: (newEntity) =>
    set((state) => ({ entities: [...state.entities, newEntity] })), // Add newEntity to the array

  remove: (entityName) =>
    set((state) => ({
      entities: state.entities.filter((entity) => entity.name !== entityName), // Filter out the entity with the given id
    })),

  removeAll: () => set({ entities: [] }), // Reset to an empty array
}));
