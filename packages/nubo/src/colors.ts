import { Color } from 'colors';

interface ColorExtended extends Color {
  brightRed: Color;
  brightGreen: Color;
  brightYellow: Color;
  brightBlue: Color;
  brightMagenta: Color;
  brightCyan: Color;
  brightWhite: Color;

  bgBrightRed: Color;
  bgBrightGreen: Color;
  bgBrightYellow: Color;
  bgBrightBlue: Color;
  bgBrightMagenta: Color;
  bgBrightCyan: Color;
  bgBrightWhite: Color;
}

export const colors: ColorExtended = require('colors');
export default colors;
