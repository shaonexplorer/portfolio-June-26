// Type declarations for Playwright test utilities used in the test suite.
// This silences TypeScript errors when the @playwright/test package is not installed as a dependency.
declare module "@playwright/test" {
  // Export generic `test` and `expect` objects; using `any` keeps the declarations simple.
  export const test: any;
  export const expect: any;
}
