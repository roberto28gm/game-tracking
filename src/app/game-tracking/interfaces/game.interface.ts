
export interface Game {
    id: number;
    name: string;
    completed: boolean;
    hours?: number;
    dateCompleted?: Date;
    image?: string;
}