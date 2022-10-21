type JsonValue = string | number | boolean | JsonObject | JsonArray | undefined;

type JsonObject = {
  [key: string]: JsonValue;
};

type JsonArray = Array<JsonValue>;

type Nullable<T> = T | null;

type Optional<T> = T | undefined;

interface ApiResponse<T> {
  results: T;
  paging: JsonObject;
}

type DummyComponent = {
  children: React.ReactNode;
};

type LANG = 'en' | 'es' | 'pt';
