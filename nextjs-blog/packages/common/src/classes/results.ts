export class Result<T = unknown> {
  public constructor(
    public readonly data: T,
    public readonly success: boolean = true
  ) {}
}

export class EmptyResult extends Result<undefined> {
  public constructor() {
    super(undefined)
  }
}
