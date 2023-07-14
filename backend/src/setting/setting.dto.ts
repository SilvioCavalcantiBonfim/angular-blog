export class SettingDto {
  title: string;
  subtitle: string;
  theme: string[];
  carousel: { amount: number; time: number };
  articles: { per_page: number };
}
