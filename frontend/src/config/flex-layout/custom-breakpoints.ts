import { BREAKPOINT } from '@angular/flex-layout';

const CUSTOM_BREAKPOINTS = [
  {
    alias: 'xs.textClip',
    suffix: 'XsTextClip',
    mediaQuery: 'only screen and (min-width: 355px) and (max-width: 441px)',
    overlapping: false,
    priority: 1001,
  },
];

export const CustomBreakPointsProvider = {
  provide: BREAKPOINT,
  useValue: CUSTOM_BREAKPOINTS,
  multi: true,
};
