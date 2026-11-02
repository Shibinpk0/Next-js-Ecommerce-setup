type HandleErrorProps = {
  message?: string;
};

export default function HandleError({ message }: HandleErrorProps) {
  if (!message) {
    return null;
  }

  return <p className="mt-1 text-sm text-red-500">{message}</p>;
}
