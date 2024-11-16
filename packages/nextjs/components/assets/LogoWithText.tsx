import { JSX, SVGProps } from "react";

export default function LogoWithText(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="205"
      height="223"
      viewBox="0 0 655 1023"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="655" height="1023" fill="url(#pattern0_1_10)" />
      <defs>
        <pattern id="pattern0_1_10" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_1_10" transform="scale(0.00152672 0.000977517)" />
        </pattern>
      </defs>
    </svg>
  );
}
