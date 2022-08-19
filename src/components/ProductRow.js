const ProductRow = ({ product }) => {
    return (
        <div class='productRow-container'>
            <table>
                <tr>
                    <td>{product.name}</td>
                    <td>EUR {product.price}</td>
                </tr>
            </table>
        </div>
    )
}

export default ProductRow;