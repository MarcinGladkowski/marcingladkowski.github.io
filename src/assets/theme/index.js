const GRAY9 = "#191919"
const GRAY8 = "#2D2D2D"
const GRAY7 = "#404040"
const GRAY6 = "#868e96"
const GRAY5 = "#adb5bd"
const GRAY4 = "#ced4da"
const GRAY3 = "#dee2e6"
const GRAY2 = "#e9ecef"
const GRAY1 = "#f1f3f5"
const GRAY0 = "#f8f9fa"

const ACCENT_LIGHT = "#6366f1"
const ACCENT_LIGHT_BG = "#eef2ff"
const ACCENT_DARK = "#818cf8"
const ACCENT_DARK_BG = "#1e1b4b"

export const light = {
  name: "light",
  colors: {
    bodyBackground: "#ffffff",
    text: GRAY9,
    secondaryText: GRAY7,
    tertiaryText: GRAY6,
    mutedText: GRAY5,
    hoveredLinkText: "#ffffff",
    border: GRAY3,
    activatedBorder: GRAY5,
    background: GRAY1,
    icon: GRAY5,
    divider: GRAY2,
    headerBackground: "rgba(255, 255, 255, 0.88)",
    headerShadow: "rgba(0, 0, 0, 0.06)",
    inlineCodeBackground: GRAY1,
    inlineCodeBackgroundDarker: GRAY3,
    tagBackground: GRAY1,
    selectedTagBackground: ACCENT_LIGHT,
    hoveredTagBackground: GRAY2,
    hoveredSelectedTagBackground: "#4f46e5",
    nextPostButtonBackground: "rgba(0, 0, 0, 0.04)",
    hoveredNextPostButtonBackground: "rgba(0, 0, 0, 0.07)",
    seriesBackground: GRAY1,
    tagText: GRAY7,
    selectedTagText: "#ffffff",
    spinner: GRAY7,
    scrollTrack: GRAY1,
    scrollHandle: GRAY4,
    blockQuoteBorder: ACCENT_LIGHT,
    blockQuoteBackground: ACCENT_LIGHT_BG,
    textFieldBorder: GRAY3,
    textFieldActivatedBorder: ACCENT_LIGHT,
    tableBackground: GRAY1,
    accentColor: ACCENT_LIGHT,
    accentColorBg: ACCENT_LIGHT_BG,
  },
}

export const dark = {
  name: "dark",
  colors: {
    bodyBackground: GRAY9,
    text: GRAY0,
    secondaryText: GRAY4,
    tertiaryText: GRAY5,
    mutedText: GRAY6,
    hoveredLinkText: GRAY9,
    border: GRAY7,
    activatedBorder: GRAY4,
    background: GRAY8,
    icon: GRAY6,
    divider: GRAY8,
    headerBackground: "rgba(25, 25, 25, 0.88)",
    headerShadow: "rgba(0, 0, 0, 0.3)",
    inlineCodeBackground: GRAY8,
    inlineCodeBackgroundDarker: GRAY7,
    tagBackground: GRAY8,
    selectedTagBackground: ACCENT_DARK,
    hoveredTagBackground: GRAY7,
    hoveredSelectedTagBackground: "#6366f1",
    nextPostButtonBackground: "rgba(255, 255, 255, 0.04)",
    hoveredNextPostButtonBackground: "rgba(255, 255, 255, 0.08)",
    seriesBackground: GRAY8,
    tagText: GRAY3,
    selectedTagText: GRAY9,
    spinner: GRAY1,
    scrollTrack: GRAY8,
    scrollHandle: GRAY7,
    blockQuoteBorder: ACCENT_DARK,
    blockQuoteBackground: ACCENT_DARK_BG,
    textFieldBorder: GRAY7,
    textFieldActivatedBorder: ACCENT_DARK,
    tableBackground: "#292e33",
    accentColor: ACCENT_DARK,
    accentColorBg: ACCENT_DARK_BG,
  },
}
