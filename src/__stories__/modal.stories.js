import React, { useState } from 'react';
import { Button, KIND } from '../button';
import { Modal, SIZE } from '../modal';

export default {
    title: 'Modal'
};

// eslint-disable-next-line react/prop-types
const ModalWrapper = ({ size }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)} kind={KIND.secondary}>
                {`Open ${size} modal`}
            </Button>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                size={size}
                title="Sign in to Next Movie"
            >
                Login
            </Modal>
        </>
    );
};

export const size = () => (
    <>
        <ModalWrapper size={SIZE.default} />
        <br />
        <br />
        <ModalWrapper size={SIZE.full} />
        <br />
        <br />
        <ModalWrapper size={SIZE.auto} />
    </>
);
