export interface TypeHelpOptions<T = any> {
    newObject: any;
    object: Record<string, any>;
    property: string;
    data: T;
}
