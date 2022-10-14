import { useNavigate, Link } from 'react-router-dom';

export default function ProfileHeader({user, isOwner, id, userIn}) {
  
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
      }
      const response = await fetch(`http://localhost:8000/conversations/new/${id}/${userIn}/`, options)
      const responseData = await response.json()
      const conversationId = responseData[0].id
      navigate('/chat', {state: conversationId})
    }catch(err){
      console.log(err)
    } 
  }
  
  return (
    <div>
        <img src='#' alt='banner'/>
        <img src='#' alt='profile image'/>
        <div>
            <h1>{user.user[0].username}</h1>
            <h2>Native Language: {user.profile[0].native_language}</h2>
        </div>
        <div>
            {isOwner ? (
            <div>
              <Link to={`/profile/${userIn}/edit`}>Edit</Link>
              <Link to={`/profile/${userIn}/settings`}>Settings</Link>
            </div>
            ) : 
            <form onSubmit={handleSubmit}>
              <button type='submit'>Chat With {user.user[0].username}</button>
            </form>
            }
        </div>
    </div>
  )
}
