export const getWordTask = (countTasks: number): string => {
  switch (countTasks) {
    case 1:
      return 'задача';
    case 2:
    case 3:
    case 4:
      return 'задачи';
    default:
      return 'задач';
  }
};
