interface Todotype {
  todo: string;
  isDone: boolean;
  id: string | number;
}

type AddFn = (text: string) => Promise<void>;
