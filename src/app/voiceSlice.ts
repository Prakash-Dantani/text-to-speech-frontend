import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Voices } from "../entities/Voices";
import { getVoices } from "../api/voicesServices";

interface VoiceState {
  selectedVoice: Voices | null;
  voiceList: Voices[];
  loading: boolean;
  page: number;
  totalPages: number;
}

const initialState: VoiceState = {
  selectedVoice: null,
  voiceList: [],
  loading: false,
  page: 1,
  totalPages: 1,
};

// ✅ Async thunk to fetch voices
export const fetchVoices = createAsyncThunk(
  "voices/fetchVoices",
  async (page: number) => {
    return await getVoices(page); // expected to return { voices: [], totalPages: number }
  }
);

const voiceSlice = createSlice({
  name: "voices",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSelectedVoice: (state, action: PayloadAction<Voices | null>) => {
      state.selectedVoice = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVoices.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVoices.fulfilled, (state, action) => {
        const { voices, totalPages } = action.payload;
        state.voiceList = [...state.voiceList, ...voices];
        state.totalPages = totalPages;
        state.loading = false;
      })
      .addCase(fetchVoices.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setPage, setSelectedVoice } = voiceSlice.actions;
export default voiceSlice.reducer;
