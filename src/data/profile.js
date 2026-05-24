import * as en from "./profile.en";
import * as pt from "./profile.pt";

const profiles = { en, pt };

export function getProfile(locale) {
  return profiles[locale] ?? profiles.en;
}
