/**
 * @typedef {Object} SiteNavItem
 * @property {string} label
 * @property {string} to
 * @property {'primary'|'secondary'|'labs'} group
 * @property {boolean} [external]
 */

/** @type {SiteNavItem[]} */
export const siteNavigation = [
  { label: 'Home', to: '/', group: 'primary' },
  { label: 'Journal', to: '/blog', group: 'primary' },
  { label: 'Newsletter', to: '/newsletter', group: 'primary' },
  { label: 'About', to: '/about', group: 'primary' },
  { label: 'Books', to: '/books', group: 'secondary' },
  { label: 'Podcasts', to: '/podcasts', group: 'secondary' },
  { label: 'Music', to: '/music', group: 'secondary' },
  { label: 'Uses', to: '/uses', group: 'secondary' },
  { label: 'Bookmarks', to: '/bookmarks', group: 'secondary' },
  { label: 'Amazon', to: '/amazon', group: 'secondary' },
  { label: 'Arcade', to: '/arcade', group: 'labs' },
  { label: 'Devosuals', to: '/devosuals', group: 'labs' }
]

export const primaryNav = siteNavigation.filter(
  (item) => item.group === 'primary'
)
export const secondaryNav = siteNavigation.filter(
  (item) => item.group === 'secondary'
)
export const labsNav = siteNavigation.filter((item) => item.group === 'labs')
