import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function TestaWalletSvg(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M16 12h2v4h-2v-4z"
        fill={props.focused ? '#1971F5' : '#7B8D9E'}
      />
      <Path
        d="M20 7V5c0-1.103-.897-2-2-2H5C3.346 3 2 4.346 2 6v12c0 2.201 1.794 3 3 3h15c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM5 5h13v2H5a1.001 1.001 0 010-2zm15 14H5.012C4.55 18.988 4 18.805 4 18V8.815c.314.113.647.185 1 .185h15v10z"
        fill={props.focused ? '#1971F5' : '#7B8D9E'}
      />
    </Svg>
  );
}

export default TestaWalletSvg;
