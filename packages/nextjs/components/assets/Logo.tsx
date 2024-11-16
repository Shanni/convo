import { JSX, SVGProps } from "react";

export default function Logo(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width={props.width || "709"}
      height={props.height || "1073"}
      viewBox="0 0 709 1073"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="709" height="1073" fill="url(#pattern0_1_7)" />
      <defs>
        <pattern id="pattern0_1_7" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_1_7" transform="scale(0.000515996 0.000340952)" />
        </pattern>
      </defs>
    </svg>
  );
}
