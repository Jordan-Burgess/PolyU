export default function ProfileBody({user}) {
  return (
    <div>
        <section className="ProfileSection">
            <h3>Languages Learning</h3>
            <hr/>
            <p>French, Spanish, Chinese</p>
        </section>
        <section className="ProfileSection">
            <h3>About Me</h3>
            <hr/>
            <p>{user.profile[0]?.bio}</p>
        </section>
        <section className="ProfileSection">
            <h3>Language Focus</h3>
            <hr/>
            <a href="#" className="Hashtag">#Work</a> <a href="#" className="Hashtag">#Study</a> <a href="#" className="Hashtag">#Travel</a>
        </section>
        <section className="ProfileSection">
            <h3>Events</h3>
            <hr/>
            <p className="EventNotice">Coming soon!</p>
        </section>
    </div>
  )
}
