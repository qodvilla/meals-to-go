import styled from 'styled-components';



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
    console.log(`${positionVariants[position]}:${theme.space[sizeIndex]}`);
    return `${positionVariants[position]}:${theme.space[sizeIndex]}`
}


export const Spacer = styled.View`
    ${({position, size, theme}) => getVariant(position, size, theme)}
`;


Spacer.defaultProps = {
    position: 'top',
    size: 'small'
}