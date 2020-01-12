import React from 'react';
import { styled } from 'baseui';
import { Avatar } from 'baseui/avatar';
import { Label3, Paragraph1 } from 'baseui/typography';
import { string } from 'prop-types';

const isEmpty = entity => !entity || entity === '';

const Root = styled('div', ({ $theme }) => ({
    paddingTop: $theme.sizing.scale200,
    paddingBottom: $theme.sizing.scale200,
    paddingLeft: 0,
    paddingRight: 0,
    display: 'flex'
}));

const AvatarContainer = styled('div', {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: '50px'
});

const InfoContainer = styled('div', ({ $theme }) => ({
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '200px',
    marginLeft: $theme.sizing.scale600
}));

export const Credit = ({ id, description, imageUrl, name, ...rest }) => (
    <Root {...rest}>
        <AvatarContainer>
            <Avatar
                /** Key required to handle bug on paginated items */
                key={id}
                name={name}
                size="scale1200"
                src={isEmpty(imageUrl) ? null : imageUrl}
            />
        </AvatarContainer>
        <InfoContainer>
            <Paragraph1 as="div" color="white">
                {name}
            </Paragraph1>
            <Label3 color="mono600">{description}</Label3>
        </InfoContainer>
    </Root>
);

Credit.propTypes = {
    id: string.isRequired,
    description: string.isRequired,
    imageUrl: string,
    name: string.isRequired
};

Credit.defaultProps = {
    imageUrl: undefined
};
