import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
import { server } from "../test/mocks";

global.fetch = fetch;

expect.extend(matchers);

afterEach(() => cleanup());
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
