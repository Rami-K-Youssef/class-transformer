import { TransformFnParams, TransformOptions } from '../interfaces';
/**
 * Defines a custom logic for value transformation.
 *
 * Can be applied to properties only.
 */
export declare function Transform<T = any>(transformFn: (params: TransformFnParams<T>) => any, options?: TransformOptions): PropertyDecorator;
