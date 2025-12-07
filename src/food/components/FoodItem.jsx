import { Link } from 'react-router-dom';
import Barcode from 'react-barcode';
import { useCart } from '../context/UseCart';
export const FoodItem = ({id, name, image, brands, packaging, price,code = () => {}}) => {
    const { addToCart } = useCart();

    const handleAdd = () => {
        addToCart({ id, name, image, brands, packaging, price, code });
    };

    return (
        <div className="col animate__animated animate__fadeIn">
            <div id="cardFoodItem" className="card">
                    <img src={ image } className="bd-placeholder-img card-img-top" alt={ name } />
                        <div className="card-body">
                            <h5 className="card-title text-truncate text-uppercase" title={name}>{name}</h5>
                            <p className="card-text text-truncate text-uppercase"><strong>Empaque: </strong>{packaging}</p>
                            <p className="card-text text-truncate text-uppercase"><strong>Marca: </strong>{brands}</p>
                            <p className="card-text text-truncate text-uppercase"><strong>Precio: </strong>$ {price}</p>
                            <p className="card-text"><strong>Codigo: </strong>{code}</p>
                            {code ? (
                                <div style={{ margin: '8px 0' }}>
                                    <Barcode
                                        value={String(code)}
                                        format="CODE128"
                                        height={25}
                                        width={1}
                                        displayValue={false}
                                    />
                                </div>
                            ) : (
                                <small className="text-muted">No barcode available</small>
                            )}
                        </div>
                        <div className="card-footer">
                            <input type="button" value="Agregar" className="btn btn-outline-primary" onClick={handleAdd} />
                        </div>
                </div>
            </div>
    );
}