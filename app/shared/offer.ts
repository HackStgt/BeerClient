export class Offer {
    title: string;
    category: string;
    amount: number;
    price: number;

    constructor(title: string, category: string, amount: number, price: number) {
        this.title = title;
        this.category = category;
        this.amount = amount;
        this.price = price;
    }
}
