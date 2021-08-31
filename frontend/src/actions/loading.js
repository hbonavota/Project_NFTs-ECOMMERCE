import {SET_LOADING } from './constants'

export const loading = (loading) => ({
    type: SET_LOADING,
    payload: loading
});
