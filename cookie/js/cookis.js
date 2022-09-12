const getCookieName = name =>{
     const cookieString = document.cookie;
     const cookiesParts = cookieString.split('; ');
     const cookie = cookiesParts.find(c => c.includes(name));
     if(cookie){
          const cookieValue = cookie.split('=')[1]
          return cookieValue;
     }
}