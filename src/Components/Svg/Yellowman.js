import React from "react";

const Yellowman = () => {
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
        <circle cx="32.5" cy="32.5" r="32.5" fill="url(#pattern0_1_773)" />
        <defs>
          <pattern
            id="pattern0_1_773"
            patternContentUnits="objectBoundingBox"
            width={1}
            height={1}
          >
            <use xlinkHref="#image0_1_773" transform="scale(0.0153846)" />
          </pattern>
          <image
            id="image0_1_773"
            width={65}
            height={65}
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </div>
  );
};

export default Yellowman;
