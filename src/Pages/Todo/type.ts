export type Status = 'Todo' | 'In Progress' | 'Review' | 'Completed' | null;

export const status = ['Todo', 'In Progress', 'Review', 'Completed'];

export interface TaskProps {
  id: number;
  title: string;
  description: string;
  status: Status;
}

export interface BoardProps {
  title: Status;
  tasks: TaskProps[];
  setActiveCard: (id: number | null) => void;
  onDrop: (status: Status, position: number) => void;
}

export type BtnVariant = 'primary' | 'secondary' | 'outline' | 'normal';

export interface ButtonProps {
  btnText: string;
  variant: BtnVariant;
}
