type ErrorMessageProps = {
  error: Partial<Error>;
};

export default function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <div tw="table-cell align-middle w-80 h-48 rounded-lg bg-red-200 p-4 fixed top-1/2 left-1/2 -ml-40 -mt-40">
      <p tw="text-red-700 font-bold text-center">Error : {error?.message ?? ``}</p>
    </div>
  );
}
