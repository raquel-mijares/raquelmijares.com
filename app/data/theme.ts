export type ThemeName = 'light' | 'dark'

export const themeColor: Record<ThemeName, string> = {
  light: '#ffffff',
  dark: '#0f0f0f',
}

export const THEME_STORAGE_KEY = 'theme'

export const themeBootScript = `(function(){var d=document.documentElement,m=matchMedia('(prefers-color-scheme: dark)');function apply(){var t=null;try{t=localStorage.getItem('${THEME_STORAGE_KEY}')}catch(e){}d.dataset.theme=t==='light'||t==='dark'?t:(m.matches?'dark':'light')}apply();m.addEventListener('change',apply)})()`
