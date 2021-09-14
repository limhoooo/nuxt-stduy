import { fetchCartITems } from "../api"


export const state = () => ({
    cartItems: [],
})

export const mutations = {
    addCartItem(state, cartItem) {
        const newCartItem =
        {
            ...cartItem,
            imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`,
        }
        state.cartItems.push(newCartItem)
    },
    setCartItems(state, cartItems) {
        state.cartItems = cartItems;
    }
}

export const actions = {
    async FETCH_CART_ITEMS({ commit }) {
        const { data } = await fetchCartITems();
        commit('setCartItems', data.map(item => (
            {
                ...item,
                imageUrl: `${item.imageUrl}?random=${Math.random()}`,
            }
        )));
    },
    // nuxt app 이 실행될때 무조건 실행됨
    // async nuxtServerInit(storeContext, nuxtContext) {
    //     await storeContext.dispatch('FETCH_CART_ITEMS')
    // }
}