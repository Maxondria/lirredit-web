import { Cache, QueryInput } from "@urql/exchange-graphcache";

export function betterUpdateQuery<MutationResult, QueryResult>(
  cache: Cache,
  queryInput: QueryInput,
  mutationResult: any,
  updateFn: (r: MutationResult, q: QueryResult) => QueryResult
) {
  return cache.updateQuery(
    queryInput,
    (data) => updateFn(mutationResult, data as any) as any
  );
}
