import { getWordByCountTasks } from './getWordByCountTasks';

describe('getWordByCountTasks', () => {
  it('count tasks - 1', () => {
    expect(getWordByCountTasks(1)).toBe('задача');
  });
  it('count tasks - 2', () => {
    expect(getWordByCountTasks(2)).toBe('задачи');
  });
  it('count tasks - 4', () => {
    expect(getWordByCountTasks(4)).toBe('задачи');
  });
  it('count tasks > 5', () => {
    expect(getWordByCountTasks(5)).toBe('задач');
  });
  it('count tasks - 0', () => {
    expect(getWordByCountTasks(0)).toBe('задач');
  });
});
