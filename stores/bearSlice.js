export const createBearSlice = (set) => ({
  bears: 0,
  addBear: () =>
    set((state) => {
      state.bears += 1;
    }),
  eatFish: () =>
    set((state) => {
      state.fishes -= 1;
    }),
});
