// @flow

import matchUserPreference from '@magica11y/cauldron';

import transparencyPreferences, { type TransparencyPreference } from './transparencyPreferences';

const transparencyPreferenceValues: Array<TransparencyPreference> = [
  transparencyPreferences.NO_PREFERENCE,
  transparencyPreferences.REDUCE,
];

/**
 * Detects user’s transparency preferences
 * using CSS3 Media Queries level 5 specification for `'prefers-reduced-transparency'`.
 *
 * @returns Either 'no-preference', 'reduce' or `null`
 * @see https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-transparency
 */
const prefersReducedTransparency = (): ?TransparencyPreference => {
  const transparencyPreference: ?TransparencyPreference = transparencyPreferenceValues.find(
    (transparencyPreferenceValue: TransparencyPreference) =>
      matchUserPreference('prefers-reduced-transparency', transparencyPreferenceValue),
  );

  if (transparencyPreference) {
    return transparencyPreference;
  }

  return null;
};

export default prefersReducedTransparency;
