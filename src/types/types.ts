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
