import { TaskSchema } from '@/entities/Task';

export type PatchTaskSchema = Pick<TaskSchema, 'status'>;
