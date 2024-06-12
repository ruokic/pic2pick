export class ImmutableSet<T> extends Set<T> {
  constructor(items?: Iterable<T>) {
    super(items);
  }

  toAdded(value: T): ImmutableSet<T> {
    const newSet = new ImmutableSet(this);
    super.add.call(newSet, value);
    return newSet;
  }

  toDeleted(value: T): ImmutableSet<T> {
    const newSet = new ImmutableSet(this);
    super.delete.call(newSet, value);
    return newSet;
  }

  toCleared(): ImmutableSet<T> {
    return new ImmutableSet();
  }

  fillWithContinuousNumber(length: number): ImmutableSet<number> {
    return new ImmutableSet(Array.from({ length }, (_, index) => index));
  }
}
