// ---------------------------------------------------------------------------
// CamCO portal routing — single source of truth for every external link.
//
// Four portals, all external to this landing site:
//   1. Portal Eksportir        -> camcoexporter.linkit360.com/login
//   2. Portal Admin / MOC      -> camcopanelgovt.linkit360.com/login (never
//      promoted in public nav — footer/login-picker only, per spec 15.1)
//   3. Portal Freight Forward. -> camcofreightforwarder.linkit360.com/login
//   4. Portal Buyer / Verify   -> camcobuyerglobal.linkit360.com/ — this is
//      the live public verification + buyer app. This landing site links
//      OUT to it (with ?ref=&src= per the routing contract) rather than
//      re-implementing verification locally.
// ---------------------------------------------------------------------------

export const PORTALS = {
  exporter: { key: 'exporter', base: 'https://camcoexporter.linkit360.com' },
  admin: { key: 'admin', base: 'https://camcopanelgovt.linkit360.com' },
  forwarder: { key: 'forwarder', base: 'https://camcofreightforwarder.linkit360.com' },
  buyer: { key: 'buyer', base: 'https://camcobuyerglobal.linkit360.com' },
}

const withParams = (url, params = {}) => {
  const usp = new URLSearchParams(params)
  const qs = usp.toString()
  return qs ? `${url}?${qs}` : url
}

export const exporterLoginUrl = (params = {}) => withParams(`${PORTALS.exporter.base}/login`, params)
export const exporterRegisterUrl = (params = {}) => withParams(`${PORTALS.exporter.base}/register`, params)
export const exporterNewUrl = (params = {}) => withParams(`${PORTALS.exporter.base}/new`, params)
export const exporterRetypeUrl = (params = {}) => withParams(`${PORTALS.exporter.base}/retype`, params)

export const adminLoginUrl = (params = {}) => withParams(`${PORTALS.admin.base}/login`, params)

export const forwarderLoginUrl = (params = {}) => withParams(`${PORTALS.forwarder.base}/login`, params)

export const buyerHomeUrl = (params = {}) => withParams(`${PORTALS.buyer.base}/`, params)
export const buyerVerifyUrl = (params = {}) => withParams(`${PORTALS.buyer.base}/verify`, params)

export const SRC = 'landing'

export const withSrc = (extra = {}) => ({ src: SRC, ...extra })
