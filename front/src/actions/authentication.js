export const isAuthenticated = (token) => ({
  type: 'USER_AUTHENTICATED',
  token
})

export const isNotAuthenticated = () => ({
  type: 'USER_NOT_AUTHENTICATED'
})