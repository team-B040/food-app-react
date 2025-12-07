import React, { useState } from 'react';
import { useCart } from '../context/UseCart';
import {BootstrapToast} from "../../ui";

export const SideCart = ({open, onClose}) => {
    const { cart, updateQty, removeFromCart, totalPrice, checkout } = useCart();
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState({ show: false, msg: '', type: 'success' });

    const items = Array.from(cart.values());

    const handleCheckout = async () => {
        setLoading(true);
        const result = await checkout();
        setLoading(false);
        if (result.success) {
            setToast({ show: true, msg: 'Compra realizada con éxito', type: 'success' });
            onClose?.();
        } else {
            setToast({ show: true, msg: 'Error en la compra: ' + (result.error || 'unknown'), type: 'danger' });
        }
    };

    return (
        <>
            <div className={`sideCart flex-shrink-0 p-3 bg-white ${open ? 'openSideCart' : ''}`}>
                <a className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                    <span className="fs-5 fw-semibold">Compra</span>
                    <button className="btn-close ms-auto" onClick={onClose}></button>
                </a>
                <div className="mb-4">
                    {items.length === 0 && <div className="text-muted">Tu carrito está vacío</div>}
                    {items.map(({ item, qty }) => (
                        <div key={item.id} className="d-flex align-items-center mb-2">
                            <img src={item.image} alt={item.name} style={{ width: 50, height: 50, objectFit: 'cover' }} />
                            <div className="ms-2 height-100 d-flex flex-column justify-content-center me-2" style={{ width: '50%' }}>
                                <div className="fw-bold text-truncate">{item.name}</div>
                                <div className="text-muted small">$ {item.price} x {qty}</div>
                            </div>
                            <div className="d-flex align-items-center">
                                <button className="btn btn-sm btn-outline-secondary me-1" onClick={() => updateQty(item.id, qty - 1)}>-</button>
                                <span>{qty}</span>
                                <button className="btn btn-sm btn-outline-secondary ms-1" onClick={() => updateQty(item.id, qty + 1)}>+</button>
                                <button className="btn btn-sm btn-link text-danger ms-2" onClick={() => removeFromCart(item.id)}><i className="fas fa-trash"></i></button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="border-top pt-3">
                    <div className="d-flex justify-content-between">
                        <strong>Total</strong>
                        <strong>$ {totalPrice.toFixed(2)}</strong>
                    </div>
                    <button className="btn btn-primary w-100 mt-3" onClick={handleCheckout} disabled={items.length === 0 || loading}>
                        {loading ? 'Procesando...' : 'Pagar'}
                    </button>
                </div>
            </div>
            <BootstrapToast
                show={toast.show}
                message={toast.msg}
                type={toast.type}
                duration={5000}
                onClose={() => setToast(s => ({ ...s, show: false }))}
            />
        </>
    );
}