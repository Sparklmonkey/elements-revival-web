import * as React from "react";
const FilterIcon = (props) => (
    <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#clip0_45_2698)">
            <path
                d="M8.75 13.75L6.25 16.25L3.75 13.75"
                stroke="#3D2C21"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.25 3.75V16.25"
                stroke="#3D2C21"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.25 6.25L13.75 3.75L16.25 6.25"
                stroke="#3D2C21"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M13.75 16.25V3.75"
                stroke="#3D2C21"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
        <defs>
            <clipPath id="clip0_45_2698">
                <rect width={20} height={20} fill="white" />
            </clipPath>
        </defs>
    </svg>
);
export default FilterIcon;
