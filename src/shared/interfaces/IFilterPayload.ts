import type { StringifiableRecord } from "query-string";

export interface IFilterPayload extends StringifiableRecord {
  limit: number;
  page: number;
  offset: number;
}