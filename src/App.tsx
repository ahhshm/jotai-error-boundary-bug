import { useAtom } from "jotai";
import { useQuery } from "@tanstack/react-query";
import { atomsWithQuery } from "jotai-tanstack-query";
import { ErrorBoundary } from "react-error-boundary";

const queryOptions = {
  queryKey: ["key"],
  queryFn: async () => {
    throw new Error("Error");
  },
  useErrorBoundary: true,
  retry: 0,
};

const [, statusAtom] = atomsWithQuery(() => queryOptions);

function JotaiData() {
  const [data] = useAtom(statusAtom);
  return <p>Jotai Data</p>;
}

function QueryData() {
  const { data } = useQuery(queryOptions);
  return <p>Query Data</p>;
}

function App() {
  return (
    <div>
      <ErrorBoundary fallbackRender={() => <p>Jotai Error</p>}>
        <JotaiData />
      </ErrorBoundary>
      <ErrorBoundary fallbackRender={() => <p>Query Error</p>}>
        <QueryData />
      </ErrorBoundary>
    </div>
  );
}

export default App;
