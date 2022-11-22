const setWalletAdress = (state, action) => {
	const {status} = action;

	return {
		...state,
		walletAdress: status,
	};
};

export default function (state, action) {
	switch (action.type) {
		case "SET_WALLET_ADRESS":
			return setWalletAdress(state, action);
		default:
			return state;
	}
}
