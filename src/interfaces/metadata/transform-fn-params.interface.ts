import { TransformationType } from '../../enums';
import { ClassTransformOptions } from '../class-transformer-options.interface';

export interface TransformFnParams<T = any> {
  value: any;
  key: string;
  obj: any;
  type: TransformationType;
  options: ClassTransformOptions;
  data: T;
}
