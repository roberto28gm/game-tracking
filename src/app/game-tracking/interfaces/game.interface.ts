
export interface Game {
    id: number;
    name: string;
    completed: boolean;
    hours?: number;
    dateCompleted?: Date;
    score?: number;
    image?: string;
}