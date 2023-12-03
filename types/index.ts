export interface ItodoItem {
  id: number;
  content: string;
  complete: boolean;
}

export interface IUser {
  id?: number;
  email: string;
  password: string;
  TodoList?: ItodoItem[];
}
