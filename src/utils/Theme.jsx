export function Theme(bgA='#fff', bgC='#f1f1f1' , clA='rgba(0,0,0,0.8)') {
    const scheme =  JSON.parse(localStorage.getItem('theme'))
    const root  = document.documentElement
    if (scheme)  {
    root.style.setProperty('--app-bgA', scheme.bgA )
    root.style.setProperty('--app-bgC', scheme.bgC )
    root.style.setProperty('--app-clA', scheme.clA ) 
    } 
    else {
    root.style.setProperty('--app-bgA', bgA )
    root.style.setProperty('--app-bgC', bgC )
    root.style.setProperty('--app-clA', clA )   
    }
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
   const theme = JSON.parse(localStorage.getItem('theme'))
   if(theme !== null) {
    return theme.theme
    }
   else false
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
