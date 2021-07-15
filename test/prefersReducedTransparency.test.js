// @flow

import mockWindowMatchMedia from '@magica11y/match-user-preference/lib/testing/mockWindowMatchMedia';

import prefersReducedTransparency, { transparencyPreferences, type TransparencyPreference } from '../src';

describe('prefersReducedTransparency()', () => {
  it('returns a transparency preference when media-query matches', () => {
    type TestParameter = {|
      testInput: TransparencyPreference,
      expectedOutput: TransparencyPreference,
    |};

    const testParameters: Array<TestParameter> = [
      {
        testInput: transparencyPreferences.NO_PREFERENCE,
        expectedOutput: 'no-preference',
      },
      {
        testInput: transparencyPreferences.REDUCE,
        expectedOutput: 'reduce',
      },
    ];

    testParameters.forEach((testParameter: TestParameter) => {
      window.matchMedia = jest
        .fn()
        .mockImplementation(() =>
          mockWindowMatchMedia(true, `(prefers-reduced-transparency: ${testParameter.testInput})`),
        );

      const transparencyPreference = prefersReducedTransparency();

      expect(transparencyPreference).toEqual(testParameter.expectedOutput);

      window.matchMedia.mockClear();
    });
  });

  it('returns "null" when preference cannot be determined', () => {
    window.matchMedia = jest.fn().mockImplementation(() => mockWindowMatchMedia(false, 'not all'));

    const transparencyPreference = prefersReducedTransparency();

    expect(transparencyPreference).toEqual(null);
  });
});
