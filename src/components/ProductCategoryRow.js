const ProductCategoryRow = ({ category }) => {
    return (
        <div class="fruitCategory-container">
            {category.toUpperCase()}
        </div>
    )
}

export default ProductCategoryRow;