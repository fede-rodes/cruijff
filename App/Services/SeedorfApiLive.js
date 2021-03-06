// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import api from './SeedorfApi'

// our "constructor"
const create = (
  baseURL = __DEV__
    ? 'http://localhost:8000/api'
    : 'https://api.sportyspots.com'
) => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      Cookie: ''
    },
    timeout: 10000
  })

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  const getUser = username => api.get('search/users/', { q: username })
  const getAllSpots = () => null
  const getSpot = spotId => spotId
  const getGame = gameId => gameId
  const getGames = ({ month }) => api.get('search/games/', { q: month })
  const createGame = game => api.post('/games/', game)
  const signup = ({ username, email, password }) =>
    api.post('/auth/registration/', {
      username,
      email,
      password1: password,
      password2: password
    })

  const submitRating = (spotUuid, userUuid, rating) => {
    api.post(`/games/${spotUuid}/reactions`, {
      // todo : construct proper post
    })
  }
  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    getUser,
    getAllSpots,
    getSpot,
    getGame,
    getGames,
    createGame,
    signup,
    submitRating,
    setToken: token => api.setHeader('Authorization', `Bearer ${token}`)
  }
}

// let's return back our create method as the default.
export default {
  create
}
