import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

import createSelectors from "./selectors";
import { createBearSlice } from "./bearSlice";
import { createFishSlice } from "./fishSlice";

const useBoundStore = create(
  devtools(
    immer((...a) => ({
      ...createBearSlice(...a),
      ...createFishSlice(...a),
    })),
  ),
);

export default createSelectors(useBoundStore);
