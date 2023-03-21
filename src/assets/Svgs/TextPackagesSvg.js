import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function TextPackagesSvg(props) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M19.5 4h-2V3a1 1 0 00-2 0v1h-6V3a1 1 0 00-2 0v1h-2a3 3 0 00-3 3v12a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 15a1 1 0 01-1 1h-14a1 1 0 01-1-1v-7h16v7zm0-9h-16V7a1 1 0 011-1h2v1a1 1 0 002 0V6h6v1a1 1 0 002 0V6h2a1 1 0 011 1v3z"
        fill={props.focused ? '#1971F5' : '#7B8D9E'}
      />
    </Svg>
  );
}

export default TextPackagesSvg;
