// papaparse.d.ts

declare module 'papaparse' {
    namespace Papa {
      interface ParseConfig {
        delimiter?: string;
        newline?: string;
        quoteChar?: string;
        escapeChar?: string;
        header?: boolean;
        dynamicTyping?: boolean;
        preview?: number;
        encoding?: string;
        worker?: boolean;
        comments?: boolean | string;
        step?: (results: ParseResult, parser: Parser) => void;
        complete?: (results: ParseResult, file?: File) => void;
        error?: (error: Error, file?: File) => void;
        download?: boolean;
        skipEmptyLines?: boolean | 'greedy';
        chunk?: (results: ParseResult, parser: Parser) => void;
        fastMode?: boolean;
        beforeFirstChunk?: (chunk: string) => string | void;
        withCredentials?: boolean;
        transform?: (value: string, field: string | number) => any;
      }
  
      interface ParseResult<T = any> {
        data: T[];
        errors: any[];
        meta: {
          delimiter: string;
          linebreak: string;
          aborted: boolean;
          fields?: string[];
          truncated?: boolean;
        };
      }
  
      interface Parser {
        // Define parser methods here
      }
  
      function parse<T>(file: File, config: ParseConfig): void;
      // Additional overloads and methods can be defined here
    }
  
    export = Papa;
  }
  