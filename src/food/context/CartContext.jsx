import React, {createContext, useMemo, useState} from 'react';

const CartContext = createContext(null);
export default CartContext;

const makeKey = (item) => {
    if (!item) return null;
    // prefer id, then code, then a reproducible fallback using name+price
    return item.id ?? item.code ?? `${item.name ?? 'item'}:${item.price ?? 0}`;
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(new Map());

    const addToCart = (item, qty = 1) => {
        const key = makeKey(item);
        if (!item || !key) return;
        setCart((prev) => {
            const cpy = new Map(prev);
            const existing = cpy.get(key);
            const newQty = (existing?.qty || 0) + qty;
            const storedItem = { ...(existing?.item || item), id: key };
            // set a new object (no mutation)
            cpy.set(key, { item: storedItem, qty: newQty });
            return cpy;
        });
    };

    const updateQty = (id, qty) => {
        setCart(prev => {
            const cpy = new Map(prev);
            if (qty <= 0) {
                cpy.delete(id);
            } else {
                const entry = cpy.get(id);
                if (entry) cpy.set(id, { ...entry, qty });
            }
            return cpy;
        });
    };

    const removeFromCart = (id) => {
        setCart(prev => {
            const cpy = new Map(prev);
            cpy.delete(id);
            return cpy;
        });
    };

    const clearCart = () => setCart(new Map());

    const totalItems = useMemo(
        () => Array.from(cart.values()).reduce((sum, e) => sum + e.qty, 0),
        [cart]
    );

    const totalPrice = useMemo(
        () =>
            Array.from(cart.values()).reduce(
                (sum, e) => sum + e.qty * (parseFloat(e.item.price) || 0),
                0
            ),
        [cart]
    );

    const checkout = async (options = { delay: 800 }) => {
        const { delay } = options;
        await new Promise((res) => setTimeout(res, delay));
        clearCart();
        return { success: true };
    };


    return (
        <CartContext.Provider value={{ cart, addToCart, updateQty, removeFromCart, clearCart, totalItems,totalPrice,checkout }}>
            {children}
        </CartContext.Provider>
    );
};