import Svg, {Path, SvgProps} from 'react-native-svg';

export const HomeIcon = ({fill, ...props}: SvgProps) => {
  return (
    <Svg width="22" height="21" viewBox="0 0 22 21" fill="none">
      <Path
        d="M20.7309 7.92302L14.094 1.28527C13.2726 0.466261 12.16 0.00634766 11 0.00634766C9.84006 0.00634766 8.72742 0.466261 7.90601 1.28527L1.26914 7.92302C1.02451 8.16608 0.830559 8.45528 0.698533 8.77386C0.566506 9.09243 0.499028 9.43405 0.500011 9.7789V18.3688C0.500011 19.065 0.776572 19.7326 1.26886 20.2249C1.76114 20.7172 2.42882 20.9938 3.12501 20.9938H18.875C19.5712 20.9938 20.2389 20.7172 20.7312 20.2249C21.2234 19.7326 21.5 19.065 21.5 18.3688V9.7789C21.501 9.43405 21.4335 9.09243 21.3015 8.77386C21.1695 8.45528 20.9755 8.16608 20.7309 7.92302ZM13.625 19.2438H8.37501V15.8015C8.37501 15.1053 8.65157 14.4376 9.14386 13.9454C9.63614 13.4531 10.3038 13.1765 11 13.1765C11.6962 13.1765 12.3639 13.4531 12.8562 13.9454C13.3485 14.4376 13.625 15.1053 13.625 15.8015V19.2438ZM19.75 18.3688C19.75 18.6008 19.6578 18.8234 19.4937 18.9875C19.3296 19.1516 19.1071 19.2438 18.875 19.2438H15.375V15.8015C15.375 14.6412 14.9141 13.5284 14.0936 12.7079C13.2731 11.8875 12.1603 11.4265 11 11.4265C9.83969 11.4265 8.72689 11.8875 7.90642 12.7079C7.08595 13.5284 6.62501 14.6412 6.62501 15.8015V19.2438H3.12501C2.89295 19.2438 2.67039 19.1516 2.50629 18.9875C2.3422 18.8234 2.25001 18.6008 2.25001 18.3688V9.7789C2.25082 9.547 2.34293 9.32476 2.50639 9.16027L9.14326 2.52515C9.6365 2.03421 10.3041 1.7586 11 1.7586C11.6959 1.7586 12.3635 2.03421 12.8568 2.52515L19.4936 9.1629C19.6565 9.32674 19.7485 9.54791 19.75 9.7789V18.3688Z"
        fill={fill || '#6E767B'}
      />
    </Svg>
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="22"
    //   height="21"
    //   viewBox="0 0 22 21"
    //   fill="none">
    //   <path
    //     d="M20.7309 7.92302L14.094 1.28527C13.2726 0.466261 12.16 0.00634766 11 0.00634766C9.84006 0.00634766 8.72742 0.466261 7.90601 1.28527L1.26914 7.92302C1.02451 8.16608 0.830559 8.45528 0.698533 8.77386C0.566506 9.09243 0.499028 9.43405 0.500011 9.7789V18.3688C0.500011 19.065 0.776572 19.7326 1.26886 20.2249C1.76114 20.7172 2.42882 20.9938 3.12501 20.9938H18.875C19.5712 20.9938 20.2389 20.7172 20.7312 20.2249C21.2234 19.7326 21.5 19.065 21.5 18.3688V9.7789C21.501 9.43405 21.4335 9.09243 21.3015 8.77386C21.1695 8.45528 20.9755 8.16608 20.7309 7.92302ZM13.625 19.2438H8.37501V15.8015C8.37501 15.1053 8.65157 14.4376 9.14386 13.9454C9.63614 13.4531 10.3038 13.1765 11 13.1765C11.6962 13.1765 12.3639 13.4531 12.8562 13.9454C13.3485 14.4376 13.625 15.1053 13.625 15.8015V19.2438ZM19.75 18.3688C19.75 18.6008 19.6578 18.8234 19.4937 18.9875C19.3296 19.1516 19.1071 19.2438 18.875 19.2438H15.375V15.8015C15.375 14.6412 14.9141 13.5284 14.0936 12.7079C13.2731 11.8875 12.1603 11.4265 11 11.4265C9.83969 11.4265 8.72689 11.8875 7.90642 12.7079C7.08595 13.5284 6.62501 14.6412 6.62501 15.8015V19.2438H3.12501C2.89295 19.2438 2.67039 19.1516 2.50629 18.9875C2.3422 18.8234 2.25001 18.6008 2.25001 18.3688V9.7789C2.25082 9.547 2.34293 9.32476 2.50639 9.16027L9.14326 2.52515C9.6365 2.03421 10.3041 1.7586 11 1.7586C11.6959 1.7586 12.3635 2.03421 12.8568 2.52515L19.4936 9.1629C19.6565 9.32674 19.7485 9.54791 19.75 9.7789V18.3688Z"
    //     fill="#E52C42"
    //   />
    //   <path
    //     d="M9 1.50633L1.5 9.00633V18.0063C1.5 20.0063 2.83333 20.173 3.5 20.0063H7.5V15.5063C8.3 12.7063 10.1667 12.3397 11 12.5063C13.4 12.5063 14.3333 15.173 14.5 16.5063V20.0063H18C19.6 20.0063 20.3333 19.3397 20.5 19.0063V9.00633C18.3333 7.00633 13.8 2.70633 13 1.50633C12.2 0.306332 10 1.00633 9 1.50633Z"
    //     fill="#E52C42"
    //   />
    // </svg>
  );
};
