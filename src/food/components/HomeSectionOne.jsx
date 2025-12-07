export const HomeSectionOne = () => {
    return (
        <div className="container px-4 py-5">
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-4">
                <div className="col d-flex align-items-start">
                    <div>
                        <h5>1. Explora</h5>
                        <p>Descubre todos los productos.</p>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <div>
                        <h5>2. Selecciona</h5>
                        <p>Agrega tus Productos en tu carrito.</p>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <div>
                        <h5>3. Pago</h5>
                        <p>Realiza tu pago con tarjeta de crédito, débito o efectivo contra entrega*.</p>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <div>
                        <h5>4. Delivery</h5>
                        <p>Recibe tu pedido en la puerta de tu casa</p>
                    </div>
                </div>
            </div>
        </div>
    );
}