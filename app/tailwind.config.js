const Color = {
  Accent: "rgba(0,0,0,1)",
  AccentFaded: "rgba(0,0,0,.25)",
  TextNeutral: "#eeeeee",
  TextPrimary: "#000000",
  TextSecondary: "#777777",
};

const FontFamily = {
  Bold: "NotoSans_700Bold",
  Regular: "NotoSans_400Regular",
};

const FontSize = {
  Heading1: 36,
  Heading2: 28,
  Heading3: 20,
  Paragraph: 16,
  Tooltip: 12,
};

const LetterSpacing = {
  Heading1: 0,
  Heading2: 0,
  Heading3: 0,
  Paragraph: 0.3,
  Tooltip: 0.5,
};

const LineHeight = {
  Heading1: 1.5,
  Heading2: 1.5,
  Heading3: 1.5,
  Paragraph: 1.5,
  Tooltip: 1.5,
};

const Spacing = {
  ExtraLarge: 40,
  ExtraSmall: 8,
  Large: 32,
  Medium: 24,
  Small: 16,
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  important: "html",
  plugins: [],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        accent: Color.Accent,
        "accent-faded": Color.AccentFaded,
        "text-neutral": Color.TextNeutral,
        "text-primary": Color.TextPrimary,
        "text-secondary": Color.TextSecondary,
      },
      fontFamily: {
        bold: FontFamily.Bold,
        regular: FontFamily.Regular,
      },
      fontSize: {
        h1: FontSize.Heading1,
        h2: FontSize.Heading2,
        h3: FontSize.Heading3,
        p: FontSize.Paragraph,
        tooltip: FontSize.Tooltip,
      },
      fontWeight: {
        bold: 700,
        regular: 400,
      },
      gap: {
        lg: Spacing.Large,
        md: Spacing.Medium,
        sm: Spacing.Small,
        xl: Spacing.ExtraLarge,
        xs: Spacing.ExtraSmall,
      },
      letterSpacing: {
        h1: LetterSpacing.Heading1,
        h2: LetterSpacing.Heading2,
        h3: LetterSpacing.Heading3,
        p: LetterSpacing.Paragraph,
        tooltip: LetterSpacing.Tooltip,
      },
      lineHeight: {
        h1: LineHeight.Heading1,
        h2: LineHeight.Heading2,
        h3: LineHeight.Heading3,
        p: LineHeight.Paragraph,
        tooltip: LineHeight.Tooltip,
      },
      padding: {
        lg: Spacing.Large,
        md: Spacing.Medium,
        sm: Spacing.Small,
        xl: Spacing.ExtraLarge,
        xs: Spacing.ExtraSmall,
      },
    },
  },
};
