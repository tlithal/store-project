const ENDPOINT = 'https://62c6cc6974e1381c0a693b3e.mockapi.io/inventory';

class StoreApi {

    //HTTP GET Function

    getInv = async() => {
        try {
            const res = await fetch(ENDPOINT);
            const data = res.json();
            return data;
        } catch(e) {
            console.log("There was an error running Fetch: ", e);
        }
    }

    //HTTP PUT Function

    putInv = async(item) => {
        try {
            const res = await fetch(`${ENDPOINT}/${item.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            });
            return await res.json();
        } catch(e) {
            console.log('There was an error running PUT: ', e);
        }
    }

    //HTTP DELETE Function

    deleteInv = (itemID) => {
        try {
            fetch(`${ENDPOINT}/${itemID}`, {
                method: 'DELETE'
            });
            this.getInv();
        } catch(e) {
            console.log('There was an error with DELETE: ', e);
        }
    }

    //HTTP POST Function

    postInv = async(name, stock, available, price) => {
        try {
            const res = await fetch(ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'name': `${name}`,
                    'stock': `${stock}`,
                    'available': `${available}`,
                    'price': `${price}`
                })
            });
            const data = await res.json();
            return data;
        } catch(e) {
            console.log('There was an error with POST: ', e);
        }
    }
}

export const storeApi = new StoreApi();