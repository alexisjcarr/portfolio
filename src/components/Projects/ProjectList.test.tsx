import React from "react";
import { render, cleanup } from "@testing-library/react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ProjectsList from "./ProjectsList";
import Project from "./Project";

configure({ adapter: new Adapter() });

describe("<ProjectsList />", () => {
  let wrapper,
    originalWarning: {
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
    wrapper = shallow(<ProjectsList />);

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
    expect(render(<ProjectsList />)).toMatchSnapshot();
  });

  it("contains four(4) Projects", () => {
    expect(wrapper.find(Project)).toHaveLength(4);
  });
});
