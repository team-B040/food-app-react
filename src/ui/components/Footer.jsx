export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="mt-5 text-center ">
            <p>© {year} FoodApp. Todos los derechos reservados.</p>
        </footer>
    );
}