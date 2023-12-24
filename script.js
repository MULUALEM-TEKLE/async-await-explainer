/* let a = 1;
let b = 2;

console.log(a);

setTimeout(() => {
	console.log(b);
}, 1000);

a = a + b;

console.log(a); */

/* let success = true;

let promise = new Promise((resolve, reject) => {
	if (success) {
		resolve({ status: "success", message: "the promise has been fulfilled" });
	} else {
		reject({ status: "failure", message: "the promise has been rejected" });
	}
});

let processPromise = (message) => {
	return new Promise((resolve, reject) => {
		resolve("processed : " + message);
	});
};

promise
	.then((object) => {
		return processPromise(object.message);
	})
	.then((processedResult) => {
		console.log(processedResult);
	})
	.catch((error) => {
		console.log(error.message);
	});
 */

/* let p1 = new Promise((resolve, _) => {
	resolve("promise 1 has been fulfilled");
});

let p2 = new Promise((resolve, _) => {
	resolve("promise 2 has been fulfilled");
});

let p3 = new Promise((resolve, _) => {
	resolve("promise 3 has been fulfilled");
});

Promise.all([p1, p2, p3]).then((message) => console.log(message));
 */

const stock = {
	apples: 10,
	oranges: 2,
};

function checkStock(item) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let quanitity = stock[item];

			if (quanitity > 5) {
				resolve(`Item ${item} is in stock, quantity : ${quanitity}`);
			} else {
				reject(`Item ${item} is out of stock, quantity : ${quanitity}`);
			}
		}, 2000);
	});
}

let processPromise = (message) => {
	return new Promise((resolve, _) => {
		resolve("processed : " + message);
	});
};

async function checkAndLogStock() {
	try {
		const message = await checkStock("oranges");
		const finalMessage = await processPromise(message);
		console.log(finalMessage);
	} catch (error) {
		const errorMessage = await processPromise(error);
		console.log(errorMessage);
	}
}

checkAndLogStock();

/*
checkStock("oranges")
	.then((message) => {
		return processPromise(message);
	})
	.then((finalMessage) => {
		console.log(finalMessage);
	})
	.catch((error) => {
		return processPromise(error);
	})
	.then((finalMessage) => {
		console.log(finalMessage);
	}); */
