export type Beer = {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  brewery: string;
  style: string;
  rating: number;
  image_url: string;
  description: string | null;
  alcohol_content: number | null;
  user_id: string;
};

export type Database = {
  public: {
    Tables: {
      beers: {
        Row: Beer;
        Insert: Omit<Beer, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Beer, 'id' | 'created_at' | 'updated_at'>>;
      };
    };
  };
};
