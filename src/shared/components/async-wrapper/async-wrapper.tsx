type AsyncWrapperProps<T> = {
  isLoading: boolean;
  isError: boolean;
  data: T | undefined;
  children: (data: T) => React.ReactNode;
  loaderSlot?: React.ReactNode;
  errorSlot?: React.ReactNode;
};

export const AsyncWrapper = <T,>({
  children,
  data,
  isLoading,
  isError,
  loaderSlot,
  errorSlot,
}: AsyncWrapperProps<T>) => {
  if (isError) return errorSlot ?? <div>Ошибка загрузки</div>;
  if (isLoading) return loaderSlot ?? <div>Загрузка...</div>;
  if (data === undefined) return undefined;

  return <>{children(data)}</>;
};
