export const SearchInput = ({value, onChange})=>{
    return (
        <div className="d-flex align-items-center" >
            <input
                type="text"
                placeholder="Buscar Producto..."
                className="form-control"
                name="searchText"
                autoComplete="off"
                 value={ value }
                 onChange={ e => onChange(e.target.value) }
            />
        </div>
    );
}