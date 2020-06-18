import { ADD_ESTIMATE } from "../constants/action-types"

export function addEstimate(payload) {
    return { type: ADD_ESTIMATE, payload }
};