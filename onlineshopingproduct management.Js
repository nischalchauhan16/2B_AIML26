let ABES = {
    id: 101,
    name: "Nischal",
    price: 5000,
    quantity: 5,

    total_price: function() {
        return this.price * this.quantity;
    },

    update_quantity: function(new_quantity) {
        this.quantity = new_quantity;
    },

    product_info: function() {
        console.log("Product ID:", this.id);
        console.log("Product Name:", this.name);
        console.log("Total Price:", this.total_price());
        console.log("Quantity:", this.quantity);
    }
};


ABES.product_info();


ABES.update_quantity(10);


ABES.product_info();