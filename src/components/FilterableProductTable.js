import SearchBar from "./SearchBar";
import ProductTable from "./ProducTable";
const FilterableProductTable = () => {
    return (
        <>
            <div>This is the filterable product table</div>
            <SearchBar />
            <ProductTable/>
        </>
    )
}

export default FilterableProductTable;