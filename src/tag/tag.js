import React from 'react';
import { Tag as BaseTag, KIND, VARIANT } from 'baseui/tag';
import { node, bool, string } from 'prop-types';

const Root = {
    style: ({ $theme }) => {
        const { colors } = $theme;

        return {
            backgroundColor: colors.primary700,
            color: colors.mono200
        };
    }
};

export const Tag = ({ closeable, children, kind, variant, ...rest }) => (
    <BaseTag
        closeable={closeable}
        kind={kind}
        variant={variant}
        overrides={{ Root }}
        {...rest}
    >
        {children}
    </BaseTag>
);

Tag.propTypes = {
    closeable: bool,
    children: node.isRequired,
    kind: string,
    variant: string
};

Tag.defaultProps = {
    closeable: false,
    kind: KIND.neutral,
    variant: VARIANT.solid
};
