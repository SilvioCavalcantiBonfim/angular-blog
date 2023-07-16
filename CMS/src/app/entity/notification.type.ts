export type Notification = {
  id: string;
  color: 'RED' | 'BLUE' | 'YELLOW' | 'GREEN' | 'GRAY';
  message: string;
  icon: string;
  time: number;
};
