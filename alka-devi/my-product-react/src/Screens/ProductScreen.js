import ProductList from '../Component/ProductList/ProductList';
import NavBar from '../Component/Nav/Nav';
import { useState } from 'react';

function ProductScreen(){
    const [searchText, setSearchText] = useState('');
    function onSearchChange(text){
        setSearchText(text);
    }

    return (
        <div>
            <NavBar onSearchChange={onSearchChange} />
            <ProductList searchText={searchText} />
        </div>
    );
}

export default ProductScreen;