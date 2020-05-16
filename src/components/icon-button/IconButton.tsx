import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import classNames from 'classnames/bind';

import styles from './IconButton.module.scss';

let cx = classNames.bind(styles);

interface IconButtonProps {
  icon: IconProp;
  size?: 'sm' | 'med' | 'lg';
  onClick?: () => void;
}

const IconButton: React.FunctionComponent<IconButtonProps> = ({
  icon,
  size = 'med',
  onClick = () => {}
}) => {
  let className = cx({
    IconButton: true,
    sm: size === 'sm',
    med: size === 'med',
    lg: size === 'lg'
  });

  return (
    <div
      className={className}
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={icon}
        size={size !== 'med' ? size : undefined}
      />
    </div>
  )
};

export default IconButton;
