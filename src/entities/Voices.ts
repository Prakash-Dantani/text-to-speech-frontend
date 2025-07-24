export interface Voices {
  _id: string;
  language_code: string;
  language_name: string;
  voice_name: string;
  gender: string;
  default: string;
  key: string;

  text_to_convert: string;
  voice: string;
  url: string;
  uploadedAt: Date;
}
