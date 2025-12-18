interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  getKey: (item: T) => React.Key;
}

export const List = <T,>({
  items,
  getKey,
  renderItem,
  ...props
}: ListProps<T>) => {
  return (
    <ul {...props}>
      {items.map((item, index) => (
        <li key={getKey(item)}>{renderItem(item, index)}</li>
      ))}
    </ul>
  );
};
