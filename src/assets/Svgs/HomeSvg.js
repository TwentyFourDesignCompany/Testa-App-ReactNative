import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HomeSvg(props) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M22.684 11.836l-9.057-9.052-.607-.607a.738.738 0 00-1.04 0l-9.664 9.659a1.498 1.498 0 00-.44 1.078c.01.825.696 1.484 1.52 1.484h.997v7.633h16.214v-7.633h1.017c.401 0 .778-.157 1.062-.441a1.49 1.49 0 00.438-1.062c0-.398-.157-.775-.44-1.06zm-8.872 8.508h-2.624v-4.782h2.624v4.782zm5.107-7.634v7.634h-3.607V15a.937.937 0 00-.937-.938h-3.75a.937.937 0 00-.938.938v5.344H6.08V12.71H3.83l8.672-8.665.542.542 8.128 8.123h-2.253z"
        style={{
          fill: props.focused ? '#1971F5' : '#7B8D9E',
        }}
      />
    </Svg>
  );
}

export default HomeSvg;
