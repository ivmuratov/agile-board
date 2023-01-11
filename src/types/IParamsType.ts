import { Params } from 'react-router-dom';

export default interface IParamsType extends Params {
  projectId: string;
  agileTaskId: string;
}
