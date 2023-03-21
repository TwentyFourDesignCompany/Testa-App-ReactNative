import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ProfileSvg(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M6 19v-1a4 4 0 014-4h4a4 4 0 014 4v1M12 11a3 3 0 110-6 3 3 0 010 6z"
        stroke={props.focused ? '#1971F5' : '#7B8D9E'}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default ProfileSvg;
