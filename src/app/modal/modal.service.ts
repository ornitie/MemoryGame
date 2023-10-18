export interface IModalService {
    execute: (...args: any[]) => (void),
}

export class DefaultModalService implements IModalService {
  execute = function (): void {
    throw new Error('Function not implemented.');
  };

  constructor() {}
}