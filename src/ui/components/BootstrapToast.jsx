import React, { useEffect } from 'react';

export const BootstrapToast = ({ show, message = '', type = 'success', duration = 3000, onClose }) => {
    useEffect(() => {
        if (!show) return;
        const t = setTimeout(() => onClose?.(), duration);
        return () => clearTimeout(t);
    }, [show, duration, onClose]);

    return (
        <div className="toast-container  position-fixed top-0 end-0 p-3" style={{ zIndex: 1080 }} aria-live="polite" aria-atomic="true">
            <div
                className={`toast align-items-center bg-success text-bg-${type} border-0 ${show ? 'show' : 'hide'}`}
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
            >
                <div className="d-flex">
                    <div className="toast-body text-light">{message}</div>
                    <button type="button" className="btn-close btn-close-white me-2 m-auto" aria-label="Close" onClick={onClose}></button>
                </div>
            </div>
        </div>
    );
};