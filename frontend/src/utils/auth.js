const login = (token) =>{
  localStorage.setItem('token',token)
}

const logout = () => {
   localStorage.removeItem('token')
   window.location.href ="/login"
}

export  {login,logout}

