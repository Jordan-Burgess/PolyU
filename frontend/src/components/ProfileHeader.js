export default function ProfileHeader({user}) {
  return (
    <div>
        <img src='#' alt='banner'/>
        <img src='#' alt='profile image'/>
        <div>
            <h1>{user[0].username}</h1>
            <h2>Native Language: {user[1][0].native_language}</h2>
        </div>
        <div>
            <a href="#">Edit</a>
            <a href="#">Settings</a>
            <a href='#'>Chat With Username</a>
        </div>
    </div>
  )
}
