export type JsonValue = string | number | boolean | JsonObject | JsonArray | undefined;

export type JsonObject = {
  [key: string]: JsonValue;
};

export type JsonArray = Array<JsonValue>;

export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

export interface ApiResponse<T> {
  results: T;
  paging: JsonObject;
}

export type DummyComponent = {
  children: React.ReactNode;
};
