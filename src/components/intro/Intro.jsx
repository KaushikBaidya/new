import { Topbar } from '../topbar/Topbar'
import './intro.css'

export const Intro = () => {
  return (
    <div className="container">
      <Topbar />
      <div className="content">
        <div className="intro">Hi, I'm Kaushik Baidya</div>
        <div className="title">
          I am a{' '}
          <span style={{ color: 'tomato', fontWeight: '500' }}>
            Web Developer
          </span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis,
          atque sit dolore quia placeat adipisci repudiandae maxime deserunt.
          Error, itaque possimus dicta mollitia dolores modi sequi fuga ipsam.
          Saepe modi nostrum dolores ullam quo quasi voluptatum blanditiis
          distinctio? Mollitia sit deleniti dolorum? Quas perspiciatis voluptate
          asperiores labore? Corporis, suscipit! Sapiente!
        </div>
        <button className="btn">
          {' '}
          <span>Contact ME</span>{' '}
        </button>
      </div>
    </div>
  )
}
