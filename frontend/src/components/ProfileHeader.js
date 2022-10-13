export default function ProfileHeader({user, isOwner}) {
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
            <a href="#">Edit</a>
            <a href="#">Settings</a>
            </div>
            ) : 
            <a href='#'>Chat With Username</a>
            }
        </div>
    </div>
  )
}
