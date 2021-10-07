class biddingPortal {
    constructor(name, bids = [], id = Util.newGuid('portal')) {
        this.id = id;
        this.name = name;
        this.bids = bids;
    }

    addBid(bid) {
        this.bids.push(message);
    }
}