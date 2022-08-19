import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow';
const list =
    [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ];

const ProductTable = () => {
    return (
        <div class='productTable-container'>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </table>
            <ProductCategoryRow category='vegetables' />
            <ProductRow product={{ category: "Fruits", price: "$1", stocked: true, name: "Apple" }} />
            <ProductRow product={{ category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" }} />
        </div>
    )
}

export default ProductTable;