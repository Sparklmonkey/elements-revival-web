import * as React from "react";
const YoutubeIcon = (props) => (
    <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect width={32} height={32} rx={16} fill="#D5CE7B" />
        <path d="M14 12.5L20 16L14 19.5V12.5Z" fill="#32241B" />
        <path
            d="M16 9C25 9 25 9 25 16C25 23 25 23 16 23C7 23 7 23 7 16C7 9 7 9 16 9Z"
            stroke="#32241B"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
export default YoutubeIcon;
