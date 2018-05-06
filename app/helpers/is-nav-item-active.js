import { helper } from '@ember/component/helper'

export function isNavItemActive(loc) {
  let pathName = location.pathname.split('/')[1]
  let isHome = location.pathname === '/'

  if((isHome && loc[0] === 'inicio') || loc[0] === pathName) {
    return 'active'
  }
}

export default helper(isNavItemActive)
