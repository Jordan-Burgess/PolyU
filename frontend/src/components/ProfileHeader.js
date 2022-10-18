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
      const response = await fetch(`https://polyu-backend.herokuapp.com/conversations/new/${id}/${userIn}/`, options)
      const responseData = await response.json()
      const conversationId = responseData[0]?.id
      navigate('/chat', {state: conversationId})
    }catch(err){
      console.log(err)
    } 
  }
  
  return (
    <div className='ProfileHeader'>
        <div className='BannerBox'>
          <img src={user.profile[0]?.banner} alt='banner' className='Banner'/>
        </div>
        <img src={user.profile[0]?.image} alt='profile image' className="ProfileImage"/>
        <div>
            <h1 className='Username'>{user.user[0]?.username}</h1>
            <h2 className='Native'>Native Language: {user.profile[0]?.native_language}</h2>
        </div>
        <div>
            {isOwner ? (
            <div className='EditSetting'>
              <Link to={`/profile/${userIn}/edit`} className='edit'>Edit <img className='EditIcons' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png' alt='edit icon'/></Link>
              <Link to={`/profile/${userIn}/settings`} className='edit'>Settings <img className="EditIcons" src="https://cdn-icons-png.flaticon.com/512/126/126472.png" alt="Settings Icon"/></Link>
            </div>
            ) : 
            <form onSubmit={handleSubmit}>
              <button type='submit' className='ChatWith'>Chat with {user.user[0]?.username}</button>
            </form>
            }
        </div>
    </div>
  )
}
