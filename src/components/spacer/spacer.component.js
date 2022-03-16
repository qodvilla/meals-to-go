import React from 'react';
import styled, { useTheme } from 'styled-components/native';



const sizeVariants = {
    small: 1,
    medium: 2,
    large: 3
}

const positionVariants = {
    top: 'margin-top',
    left: 'margin-left',
    right: 'margin-right',
    bottom: 'margin-bottom'
}

const getVariant = (position, size, theme) => {
    const sizeIndex = sizeVariants[size];
    return `${positionVariants[position]}:${theme.space[sizeIndex]}`
}

const SpacerView = styled.View`
    ${({variant}) => variant}
`
// the variant ^ is essentially a styling text.

export const Spacer = ({position, size, children}) => {
    const theme = useTheme();
    // calculating the variant ahead of time:
    const variant = getVariant(position, size, theme);
    return (<SpacerView variant={variant}>
        {children}
    </SpacerView>)
}

Spacer.defaultProps = {
    position: 'top',
    size: 'small'
}