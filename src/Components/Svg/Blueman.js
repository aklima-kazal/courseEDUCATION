import React from "react";

const Blueman = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={65}
        height={65}
        viewBox="0 0 65 65"
        fill="none"
      >
        <circle cx="32.5" cy="32.5" r="32.5" fill="url(#pattern0_1_763)" />
        <defs>
          <pattern
            id="pattern0_1_763"
            patternContentUnits="objectBoundingBox"
            width={1}
            height={1}
          >
            <use xlinkHref="#image0_1_763" transform="scale(0.0153846)" />
          </pattern>
          <image
            id="image0_1_763"
            width={65}
            height={65}
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </div>
  );
};

export default Blueman;
