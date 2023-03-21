import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ChatIcon(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 67 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M33.772 64.245c16.636 0 30.122-13.486 30.122-30.122 0-16.635-13.486-30.121-30.122-30.121S3.65 17.488 3.65 34.123c0 8.022 3.136 15.31 8.248 20.709L5.84 61.746c-.853.974-.162 2.499 1.132 2.499h26.8zM18.711 25.087h30.122M18.711 37.136H30.76"
        stroke={props.focused ? '#1971F5' : '#7B8D9E'}
        strokeWidth={6.02434}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ChatIcon;
