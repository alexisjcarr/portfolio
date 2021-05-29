import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from './App'
import NavBar from '../NavBar'
import AboutMe from '../AboutMe'
import Projects from '../Projects'
import Contact from '../Contact'

configure({ adapter: new Adapter() })

describe('<App />', () => {
  let wrapper,
    originalWarning: {
      (message?: any, ...optionalParams: any[]): void
      (message?: any, ...optionalParams: any[]): void
      (message?: any, ...optionalParams: any[]): void
      (message?: any, ...optionalParams: any[]): void
    },
    originalError: {
      (message?: any, ...optionalParams: any[]): void
      (message?: any, ...optionalParams: any[]): void
      (message?: any, ...optionalParams: any[]): void
      (message?: any, ...optionalParams: any[]): void
    }

  beforeEach(() => {
    wrapper = shallow(<App />)

    originalWarning = console.warn
    originalError = console.error
    console.error = jest.fn()
    console.warn = jest.fn()
  })

  afterEach(() => {
    cleanup()

    console.warn = originalWarning // turns it back into the original error after test runs
    console.error = originalError
  })

  it('matches snapshot', () => {
    expect(render(<App />)).toMatchSnapshot()
  })

  it('contains NavBar', () => {
    expect(wrapper.find(NavBar)).toBeTruthy()
  })

  it('contains AboutMe', () => {
    expect(wrapper.find(AboutMe)).toBeTruthy()
  })

  it('contains Projects', () => {
    expect(wrapper.find(Projects)).toBeTruthy()
  })

  it('contains Contact', () => {
    expect(wrapper.find(Contact)).toBeTruthy()
  })
})
