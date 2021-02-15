const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

const initialColors = {
    fundo: getStyle(html, "--fundo"),
    visor: getStyle(html, "--visor"),
    padrao: getStyle(html, "--padrao"),
    espera: getStyle(html, "--espera")
}

const albedoColors = {
    fundo: getStyle(html, "--fundoAlbedo"),
    visor: getStyle(html, "--visorAlbedo"),
    padrao: getStyle(html, "--padraoAlbedo"),
    espera: getStyle(html, "--esperaAlbedo")
}

// const scannerColors = {
//     visor: getStyle(html, "--visorScanner"),
//     espera: getStyle(html, "--esperaScanner"),
// }

const transformKey = key => 
"--" + key.replace(/([A-Z])/, "$1")


const changeColors = (colors) => {
    Object.keys(colors).map(key => {
        html.style.setProperty(transformKey(key), colors[key])
    })
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(albedoColors) : changeColors(initialColors)
})