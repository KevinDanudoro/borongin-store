export const controllerWrapper = <T>({
  data,
  statusCode,
  message,
}: {
  data: T;
  statusCode: number;
  message: string;
}) => {
  return { data, statusCode, message };
};
