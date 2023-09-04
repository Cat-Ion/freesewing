export const HeaderWrapper = ({ show, children }) => (
  <header
    className={`
    fixed bottom-0 md:bottom-auto md:top-0 left-0
    bg-neutral
    w-full
    z-30
    transition-transform
    duration-300 ease-in-out
    ${show ? '' : 'translate-y-36 md:-translate-y-36'}
    drop-shadow-xl
  `}
  >
    {' '}
    {children}
  </header>
)

// can't use string interpolation or tailwind won't account for these classes
const shownHeaderClasses = {
  'bottom-16': 'group-[.header-shown]/layout:bottom-16',
  'md:top-24': 'group-[.header-shown]/layout:md:top-24',
}
export const shownHeaderSelector = (cls) => shownHeaderClasses[cls]
