import { ThemeColors } from "./color";

// Accepts a theme color object and list of opacity steps
export const populateOpacityMixes = (colors: ThemeColors, keys: (keyof ThemeColors)[]) => {
  const mixedColors = { ...colors };

  keys.forEach((key) => {
    const color = colors[key];
    if (!color) return;

    for (let percent = 10; percent <= 90; percent += 10) {
      mixedColors[`${String(key)}_${percent}` as keyof ThemeColors] = withOpacity(
        color,
        percent / 100
      );
    }
  });

  return mixedColors;
};

// Helper to convert hex/rgb to rgba string
export const withOpacity = (color:string, alpha: number) => {
  if (color.startsWith('#')) {
    const cleanHex = color.replace("#", "");
    let hex = cleanHex;
    if (cleanHex.length === 3) {
      hex = cleanHex.split('').map((c:string) => c + c).join('');
    }
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return color;
};
