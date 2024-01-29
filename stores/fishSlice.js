export const createFishSlice = (set) => ({
  fishes: 0,
  addFish: () =>
    set((state) => {
      state.fishes += 1;
    }),
});
