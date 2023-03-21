import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function NavLink({selected, setSelected, title}) {
  return (
    <TouchableOpacity
      onPress={() => {
        setSelected(title);
      }}
      style={{
        width: 140,
        alignItems: 'center',
        borderBottomWidth: selected === title ? 1.5 : 0,
        bottom: -1,
        padding: 4,
      }}>
      <Text style={{color: '#000000', fontSize: 15, fontWeight: '600'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
