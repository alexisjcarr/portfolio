import React from "react";
import { render, cleanup } from "@testing-library/react";

import Skills from "./Skills";

describe("<Skills />", () => {
  let originalWarning: {
      (message?: any, ...optionalParams: any[]): void;
      (message?: any, ...optionalParams: any[]): void;
      (message?: any, ...optionalParams: any[]): void;
      (message?: any, ...optionalParams: any[]): void;
    },
    originalError: {
      (message?: any, ...optionalParams: any[]): void;
      (message?: any, ...optionalParams: any[]): void;
      (message?: any, ...optionalParams: any[]): void;
      (message?: any, ...optionalParams: any[]): void;
    };

  beforeEach(() => {
    originalWarning = console.warn;
    originalError = console.error;
    console.error = jest.fn();
    console.warn = jest.fn(); // temporarily sets console.warn to a jest function
  });

  afterEach(() => {
    cleanup();

    console.warn = originalWarning; // turns it back into the original error after test runs
    console.error = originalError;
  });

  it("matches snapshot", () => {
    expect(render(<Skills />)).toMatchSnapshot();
  });
});
