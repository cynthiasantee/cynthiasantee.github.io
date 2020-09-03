const BP = {
    desktopMin: 800,
    tabletMax: 799,
    tabletMin: 400,
    mobileMax: 399
}
  
export const breakpoint = {
  mobile: `(max-width: ${BP.mobileMax}px)`,
  tablet: `(min-width: ${BP.tabletMin}px) and (max-width: ${BP.tabletMax}px)`,
  desktop: `(min-width: ${BP.desktopMin}px)`,
  mobileTablet: `(max-width: ${BP.tabletMax}px)`,
  tabletDesktop: `(min-width: ${BP.tabletMin}px)`
}
