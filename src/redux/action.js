import { ADD_CHANNELS, HIDE_LOADER, SHOW_LOADER } from "./constants"

export const addChannels = channels => ({
    type : ADD_CHANNELS,
    payload : channels
})

export const showLoader = () => ({
    type: SHOW_LOADER,
})
export const hideLoader = () => ({
    type: HIDE_LOADER,
})