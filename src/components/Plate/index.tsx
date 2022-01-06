import React from 'react';

import { styles } from './styles';
import {MotiImage} from 'moti'
import plateImg from '../../assets/plate.png';

export function Plate() {
  return (
    <MotiImage
      style={styles.plate}
      source={plateImg}
      resizeMode="contain"
      from={{
        opacity: 0,
        rotate: '100deg'
      }}

      animate={{
        opacity: 1,
        rotate: '0deg'
      }}

      transition={{
        type: 'timing',
        duration: 3000,
      }}
    />
  );
}