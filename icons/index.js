import styled from 'styled-components';
import React from 'react';

const Svg = styled.svg.attrs((props) => ({
  width: props.width || '24px',
  height: props.height || '24px',
  display: props.display || 'block',
  fill: props.fill || 'none',
  viewBox: props.viewBox || '0 0 24 24',
}))``;

export const IconClose = (props) => (
  <Svg viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M16.004 16.0445C15.8728 16.0451 15.7428 16.0196 15.6216 15.9695C15.5004 15.9194 15.3904 15.8456 15.298 15.7525L1.29797 1.75249C1.20246 1.66024 1.12627 1.5499 1.07386 1.42789C1.02145 1.30589 0.993867 1.17467 0.992714 1.0419C0.99156 0.909116 1.01686 0.777438 1.06714 0.654542C1.11742 0.531646 1.19168 0.419992 1.28557 0.3261C1.37946 0.232207 1.49112 0.15796 1.61401 0.107679C1.73691 0.0573985 1.86859 0.0320871 2.00137 0.0332409C2.13414 0.0343947 2.26537 0.0619842 2.38737 0.114393C2.50937 0.166802 2.61972 0.24298 2.71196 0.33849L16.712 14.3385C16.8515 14.4785 16.9464 14.6566 16.9848 14.8505C17.0231 15.0444 17.0031 15.2453 16.9274 15.4278C16.8516 15.6103 16.7235 15.7663 16.5591 15.8761C16.3948 15.9859 16.2016 16.0445 16.004 16.0445Z" />
    <path d="M2.00394 16.0445C1.80631 16.0445 1.61312 15.9859 1.44877 15.8761C1.28442 15.7663 1.15628 15.6103 1.08053 15.4278C1.00478 15.2453 0.984809 15.0444 1.02315 14.8505C1.06149 14.6566 1.15641 14.4785 1.29594 14.3385L15.2959 0.33849C15.3882 0.24298 15.4985 0.166802 15.6205 0.114393C15.7425 0.0619842 15.8738 0.0343947 16.0065 0.0332409C16.1393 0.0320871 16.271 0.0573985 16.3939 0.107679C16.5168 0.15796 16.6284 0.232207 16.7223 0.3261C16.8162 0.419992 16.8905 0.531646 16.9408 0.654542C16.991 0.777438 17.0163 0.909116 17.0152 1.0419C17.014 1.17467 16.9865 1.30589 16.934 1.42789C16.8816 1.5499 16.8055 1.66024 16.7099 1.75249L2.70994 15.7525C2.61754 15.8456 2.50752 15.9194 2.38631 15.9695C2.26509 16.0196 2.13511 16.0451 2.00394 16.0445Z" />
  </Svg>
);