export default function ProfileBody({user}) {
  return (
    <div>
        <section>
            <h3>Language Learning</h3>
            <p>Languages</p>
        </section>
        <section>
            <h3>About Me</h3>
            <p>{user.profile[0]?.bio}</p>
        </section>
        <section>
            <h3>Language Focus</h3>
            <p>Hashtags</p>
        </section>
        <section>
            <h3>Events</h3>
            <p>All Rsvp Events</p>
        </section>
    </div>
  )
}
