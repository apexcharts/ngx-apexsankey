import { ApexSankeyConstructor, ApexSankeyWindow } from './types';

/**
 * gets the ApexSankey constructor from window
 */
export function getApexSankeyClass(): ApexSankeyConstructor | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const win = window as ApexSankeyWindow;
  return win.ApexSankey || null;
}

/**
 * sets the ApexSankey license key globally
 * should be called once at app initialization, before rendering any charts
 *
 * @param licenseKey - the license key string provided by ApexSankey
 *
 * @example
 * ```ts
 * import { setApexSankeyLicense } from 'ngx-apexsankey';
 *
 * // call this in your app.config.ts or main.ts
 * setApexSankeyLicense('your-license-key-here');
 * ```
 */
export function setApexSankeyLicense(licenseKey: string): void {
  if (typeof window === 'undefined') {
    return;
  }

  const win = window as ApexSankeyWindow;

  if (win.ApexSankey) {
    win.ApexSankey.setLicense(licenseKey);
  } else {
    // store license key to be applied when ApexSankey loads
    win.__APEX_SANKEY_LICENSE_KEY__ = licenseKey;
  }
}

/**
 * applies stored license key if it was set before ApexSankey loaded
 */
export function applyStoredLicense(ApexSankey: ApexSankeyConstructor): void {
  if (typeof window === 'undefined') {
    return;
  }

  const win = window as ApexSankeyWindow;

  if (win.__APEX_SANKEY_LICENSE_KEY__) {
    ApexSankey.setLicense(win.__APEX_SANKEY_LICENSE_KEY__);
  }
}
