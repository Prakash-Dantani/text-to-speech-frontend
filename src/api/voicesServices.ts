// src/api/voiceService.ts

import ApiClient from "../services/apiClient";

export const getVoices = async (page: number) => {
  const response = await ApiClient.get(`/voices?page=${page}&limit=5`);
  return response.data;
};
