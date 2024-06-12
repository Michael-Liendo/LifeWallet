export type SpacerSize =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14';

export const getSize = (size?: SpacerSize) => {
  switch (size) {
    case '1':
      return 2;
    case '2':
      return 4;
    case '3':
      return 8;
    case '4':
      return 12;
    case '5':
      return 16;
    case '6':
      return 20;
    case '7':
      return 24;
    case '8':
      return 32;
    case '9':
      return 40;
    case '10':
      return 48;
    case '11':
      return 64;
    case '12':
      return 80;
    case '13':
      return 96;
    default:
      return 0;
  }
};
