import React, { useState } from 'react';
import { Button } from '../components/button';
import { Modal } from '../components/modal';

export default {
    title: 'Modal'
};

// eslint-disable-next-line react/prop-types
const ModalWrapper = ({ size }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)} variant="secondary">
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
        <ModalWrapper size="default" />
        <br />
        <br />
        <ModalWrapper size="full" />
        <br />
        <br />
        <ModalWrapper size="auto" />
    </>
);
