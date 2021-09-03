
const MONEY_UNITS = {
	PENNY: 0.01,
	NICKEL: 0.05,
	DIME: 0.1,
	QUARTER: 0.25,
	ONE: 1.0,
	FIVE: 5.0,
	TEN: 10.0,
	TWENTY: 20.0,
	"ONE HUNDRED": 100.0
};

function checkCashRegister(price, cash, cid) {
    if(cash === price) return {status: "CLOSED", change: []}
    if (price > cash) return { status: "INSUFFICIENT_FUNDS", change: [] };

    let totalRegisterCash = 0;
    let change = cash - price;

	for (const [key, value] of cid) {
        totalRegisterCash += value;  
    }

    if (totalRegisterCash < change) return { status: "INSUFFICIENT_FUNDS", change: [] };

    if (change === totalRegisterCash)return { status: "CLOSED", change: [...cid] };

    let totalChange = []
    const reverseCID = [...cid]

    for (let [key, value] of reverseCID.reverse()) {
		let temp = 0;
		while (change >= MONEY_UNITS[key] && value > 0) {
			temp += MONEY_UNITS[key];
			value -= MONEY_UNITS[key];
            change = Math.round( (change - MONEY_UNITS[key]) * 100) / 100;
		}
		if (temp > 0) {
			totalChange.push([key, temp]);
		}
	}
    if (change > 0) {
		return { status: "INSUFFICIENT_FUNDS", change: [] };
	}
    return { status: "OPEN", change: totalChange };
    
}

let change = checkCashRegister(19.5, 20, [
	["PENNY", 0.01],
	["NICKEL", 0],
	["DIME", 0],
	["QUARTER", 0],
	["ONE", 1],
	["FIVE", 0],
	["TEN", 0],
	["TWENTY", 0],
	["ONE HUNDRED", 0]
]);
console.log(change);