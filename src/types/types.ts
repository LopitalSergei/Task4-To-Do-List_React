export interface ITask {
  id: number;
  value: string;
  status: boolean;
}

export interface IUser {
  readonly login: string;
  readonly avatar_url: string;
  readonly html_url: string;
}

export enum Themes {
  light = "Light theme",
  dark = "Dark theme",
}

export type ThemeType = { theme: string; setTheme: (theme: string) => void };
