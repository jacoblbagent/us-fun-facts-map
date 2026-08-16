import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface MapState {
  hoveredState: string | null;
  tooltipPos: { x: number; y: number } | null;
}

const initialState: MapState = {
  hoveredState: null,
  tooltipPos: null,
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setHoveredState(state, action: PayloadAction<{ stateAbbr: string | null; x: number; y: number } | null>) {
      if (action.payload) {
        state.hoveredState = action.payload.stateAbbr;
        state.tooltipPos = { x: action.payload.x, y: action.payload.y };
      } else {
        state.hoveredState = null;
        state.tooltipPos = null;
      }
    },
  },
});

export const { setHoveredState } = mapSlice.actions;
export default mapSlice.reducer;