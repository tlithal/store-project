import React from 'react';
import { Item } from './Item';
import { storeApi } from '../api/StoreApi';
import { ItemForm } from './ItemForm';

export default class Store extends React.Component {
    state = {
        inventory: []
    };

    //Renders all the items in the API onto the screen
    componentDidMount() {
        this.fetchInventory();
    }

    //Function called in componentDidMount to render the items using the GET call from the API

    fetchInventory = async() => {
        const inventory = await storeApi.getInv();
        this.setState({inventory});
    }

    //Calling the PUT api call

    updateInventory = async(updatedItem) => {
        await storeApi.putInv(updatedItem);
        this.fetchInventory();
    }

    //Calling the POST api call

    createItem = async(name, stock, available, price) => {
        await storeApi.postInv(name, stock, available, price);
        this.fetchInventory();
    }

    //Calling the DELETE api call
    
    deleteItem = async(itemID) => {
        await storeApi.deleteInv(itemID);
        this.fetchInventory();
    }

    render() {
        return(
            <div className="inventory-list text-center">
                <h1>Shop Here</h1>
                <hr />
                <div className='card w-75 mb-5 mx-auto border-dark'>
                    <div className='card-header text-center'>
                        <h2>Add an Item</h2>
                    </div>
                    <div className='card-body text-center'>
                        <ItemForm submit={this.createItem} />
                    </div>
                </div>
                {this.state.inventory.map((item) => (
                    <Item 
                        item={item}
                        key={item.id}
                        updateInventory={this.updateInventory}
                        deleteItem={this.deleteItem}
                    />
                ))}
            </div>
        );
    }
}