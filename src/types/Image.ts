export interface Image {
  id: string;
  description: string | null;
  alt_description: string | undefined;
  urls: {
    small: string;
    regular: string;
    full: string;
    thumb: string;
  };
  user?: {
    name: string;
  };
}
