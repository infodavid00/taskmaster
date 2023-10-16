export function Theme(bgA, bgC , clA) {
    const scheme =  JSON.parse(localStorage.getItem('theme'))
    const root  = document.documentElement
    root.style.setProperty('--app-bgA', scheme.bgA)
    root.style.setProperty('--app-bgC', scheme.bgC)
    root.style.setProperty('--app-clA', scheme.clA)   
}

function AppStorage(theme, bgA, bgC , clA) {
    const value = {
        theme : theme,
        bgA : bgA,
        bgC : bgC,
        clA : clA
    }
    return localStorage.setItem('theme', JSON.stringify(value))
}

export function CheckTheme() {
    return JSON.parse(localStorage.getItem('theme')).theme
}

export function DarkTheme() { 
    const bgA  = '#333';
    const bgC =  'rgba(100,100,100,0.5)';
    const clA = 'rgba(256,256,256,0.9)';
    AppStorage('dark', bgA, bgC , clA)
    window.location.reload()
}

export function LightTheme() { 
    const bgA  = '#fff';
    const bgC =  '#f1f1f1';
    const clA = 'rgba(0,0,0,0.8)';
    AppStorage('light', bgA, bgC , clA) 
    window.location.reload()
}
