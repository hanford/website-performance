import expect from 'expect'

import perf from 'src/index'

describe('website-performance', () => {
  it('Gets test performance metrics', () => {
    const { tti, dcl, complete } = perf()

    expect(tti).toBeTruthy()
    expect(dcl).toBeTruthy()
    expect(complete).toBeTruthy()
  })
})
