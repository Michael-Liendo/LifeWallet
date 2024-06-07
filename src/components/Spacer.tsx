import { type SpacerSize, getSize } from '../utils/getSize';

type Spaces = {
  readonly y?: number;
  readonly x?: number;
};

type SpacerProps = {
  x?: SpacerSize;
  y?: SpacerSize;
};

export default function Spacer({ x = '0', y = '0' }: SpacerProps) {
  const space: Spaces = {
    ...(x && {
      x: getSize(x),
      y: getSize(y),
    }),
    ...(y && {
      y: getSize(y),
      x: getSize(x),
    }),
  };

  return <div className={`h-${space.y} w-${space.x}`} />;
}
