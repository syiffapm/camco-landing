// ---------------------------------------------------------------------------
// CamCO portal routing — single source of truth for every external link.
//
// Four portals per the spec:
//   1. Portal Eksportir        -> camcoexporter.linkit360.com        (external)
//   2. Portal Admin / MOC      -> camcopanelgovt.linkit360.com       (external)
//   3. Portal Freight Forward. -> camcofreightforwarder.linkit360.com(external)
//   4. Portal Buyer            -> camcobuyerglobal.linkit360.com/    (root, no /login)
//
// The BRD (Bagian "Objek", hal. 1) states the public landing page itself is
// hosted on camcobuyerglobal.linkit360.com — the same domain given for the
// buyer portal's root URL. So this app *is* that domain: buyer sign-in /
// light registration is handled as in-app routes (/login, /register-buyer)
// rather than a fourth external redirect. If that's wrong, swap
// BUYER_PORTAL_BASE below for an external URL and point loginHref at it.
// ---------------------------------------------------------------------------

export const PORTALS = {
  exporter: {
    key: 'exporter',
    base: 'https://camcoexporter.linkit360.com',
  },
  admin: {
    key: 'admin',
    base: 'https://camcopanelgovt.linkit360.com',
  },
  forwarder: {
    key: 'forwarder',
    base: 'https://camcofreightforwarder.linkit360.com',
  },
  buyer: {
    key: 'buyer',
    base: '', // same-origin: this app
  },
}

const withParams = (url, params = {}) => {
  const usp = new URLSearchParams(params)
  const qs = usp.toString()
  return qs ? `${url}?${qs}` : url
}

export const exporterLoginUrl = (params = {}) =>
  withParams(`${PORTALS.exporter.base}/login`, params)

export const exporterRegisterUrl = (params = {}) =>
  withParams(`${PORTALS.exporter.base}/register`, params)

export const exporterNewUrl = (params = {}) =>
  withParams(`${PORTALS.exporter.base}/new`, params)

export const exporterRetypeUrl = (params = {}) =>
  withParams(`${PORTALS.exporter.base}/retype`, params)

export const adminLoginUrl = (params = {}) =>
  withParams(`${PORTALS.admin.base}/login`, params)

export const forwarderLoginUrl = (params = {}) =>
  withParams(`${PORTALS.forwarder.base}/login`, params)

export const SRC = 'landing'

export const withSrc = (extra = {}) => ({ src: SRC, ...extra })
