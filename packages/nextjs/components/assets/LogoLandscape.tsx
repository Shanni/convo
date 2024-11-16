import { JSX, SVGProps } from "react";

export default function LogoLandscape(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement> & { height?: number }) {
  return (
    <svg
      {...props}
      width={props.width || "1054"}
      height={props.height || "208"}
      viewBox="0 0 1054 208"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        width={props.width || "1054"}
        height={props.height || "208"}
        fill="url(#pattern0_18_2)"
        y={props.height ? (208 - props.height) / 2 : 0}
      />
      <defs>
        <pattern id="pattern0_18_2" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_18_2" transform="matrix(0.000644064 0 0 0.0032602 0 -2.19418)" />
        </pattern>
      </defs>
    </svg>
  );
}
