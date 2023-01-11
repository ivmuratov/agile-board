export default interface IAgileTask {
  _id: string;
  name: string;
  description: string;
  category: string;
  author: string;
  executor: string;
  createdDate: string;
  updatedDate: string;
  finishedDate: string;
  status: string;
  type: string;
  priority: string;
}
