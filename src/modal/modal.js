import React from 'react';
import {
    Modal as BaseModal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FocusOnce,
    SIZE,
    ROLE
} from 'baseui/modal';
import { bool, node, arrayOf, oneOfType } from 'prop-types';

export { SIZE, ROLE };

// https://baseweb.design/components/modal/
export const Modal = ({
    animate,
    closeable,
    children,
    header,
    footer,
    ...rest
}) => (
    <BaseModal animate closeable {...rest}>
        {header && (
            <FocusOnce>
                <ModalHeader>{header}</ModalHeader>
            </FocusOnce>
        )}
        <ModalBody>{children}</ModalBody>
        {footer && <ModalFooter>{footer}</ModalFooter>}
    </BaseModal>
);

Modal.propTypes = {
    animate: bool,
    closeable: bool,
    children: oneOfType([node, arrayOf(node)]).isRequired,
    footer: oneOfType([node, arrayOf(node)]),
    header: oneOfType([node, arrayOf(node)])
};

Modal.defaultProps = {
    animate: true,
    closeable: true,
    footer: undefined,
    header: undefined
};
