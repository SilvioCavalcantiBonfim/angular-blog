export type Setting = {
  title: string;
  subtitle: string;
  theme: string[];
  carousel: {
    amount: number;
    time: number;
  };
  articles: {
    total: number;
    per_page: number;
  };
};
