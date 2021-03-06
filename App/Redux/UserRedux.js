import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

export const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  SUCCESS: 'success',
  FAILURE: 'failure'
}

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions(
  {
    signupRequest: { username: null, email: null, password: null },
    signupSuccess: ['data'],
    signupFailure: ['data'],
    setUuid: ['uuid'],
    setClaims: ['claims'],
    setToken: ['token'],
    setInitialized: ['initialized'],
    login: null,
    logout: null
  },
  { prefix: 'USER_' }
)

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  signup: {
    status: STATUS.IDLE
  },
  user: null,
  uuid: null,
  claims: {},
  token: null,
  initialized: false
})

/* ------------- Selectors ------------- */

export const userSelector = {
  user: state => state.user
}

/* ------------- Reducers ------------- */

export const login = state => INITIAL_STATE
export const logout = state => INITIAL_STATE

export const setToken = (state, action) => state.merge({ token: action.token })
export const setUUID = (state, action) => state.merge({ uuid: action.uuid })
export const setClaims = (state, action) =>
  state.merge({ claims: action.claims })
export const setInitialized = (state, action) =>
  state.merge({ initialized: action.initialized })

export const signupRequest = (state, { username, email, password }) =>
  INITIAL_STATE.merge({ signup: { status: STATUS.PENDING } })

export const signupSuccess = (state, { token, user }) =>
  INITIAL_STATE.merge({ signup: { status: STATUS.SUCCESS }, user })

export const signupFailure = (state, { data }) =>
  INITIAL_STATE.merge({ signup: { status: STATUS.FAILURE, data } })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN]: login,
  [Types.LOGOUT]: logout,
  [Types.SET_TOKEN]: setToken,
  [Types.SET_UUID]: setUUID,
  [Types.SET_CLAIMS]: setClaims,
  [Types.SET_INITIALIZED]: setInitialized,
  [Types.SIGNUP_REQUEST]: signupRequest,
  [Types.SIGNUP_SUCCESS]: signupSuccess,
  [Types.SIGNUP_FAILURE]: signupFailure
})
