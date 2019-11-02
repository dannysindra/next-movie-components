import React from 'react';
import {
    Modal as BaseModal,
    ModalHeader,
    ModalBody,
    SIZE,
    ROLE
} from 'baseui/modal';
import { string, node, arrayOf, oneOf, oneOfType } from 'prop-types';

const mapSize = size => {
    if (size === 'full') {
        return SIZE.full;
    }
    if (size === 'auto') {
        return SIZE.auto;
    }
    return SIZE.default;
};

// https://baseweb.design/components/modal/
export const Modal = ({ children, size, title, ...rest }) => (
    <BaseModal
        animate
        autofocus={false}
        closeable
        size={mapSize(size)}
        role={ROLE.dialog}
        overrides={{
            Dialog: {
                style: ({ $theme }) => ({
                    backgroundColor: $theme.colors.backgroundAlt
                })
            }
        }}
        {...rest}
    >
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
    </BaseModal>
);

Modal.propTypes = {
    children: oneOfType([node, arrayOf(node)]).isRequired,
    size: oneOf(['default', 'full', 'auto']),
    title: string
};

Modal.defaultProps = {
    size: 'default',
    title: ''
};
