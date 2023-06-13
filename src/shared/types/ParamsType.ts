import { Params } from 'react-router-dom';

export default interface ParamsType extends Params {
  projectId: string;
  agileTaskId: string;
}
