class UserNotRegistered extends Error {
    constructor(email: string) {
      super(`User with email ${email} not registered`)
    }
  }
  
  export default UserNotRegistered
  