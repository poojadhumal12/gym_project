import React from 'react'

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        "Push yourself because no one else is going to do it for you. Train hard, stay strong."
        </p>
        <img src="../public/image1.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        "Join our gym bootcamp to transform your fitness journey with intense, structured workouts.
         Experience a supportive community and achieve your goals faster!"
        </p>
        <div className="bootcamps">
          <div>
            <h4>"Strive for progress, not perfection."</h4>
            <p>
            At our centers, you’ll find a wide variety of workout formats, such as - Boxing, Dance Fitness, Yoga, S&C, and HRX. 
            These workouts focus on strength, muscle endurance, flexibility, stamina & balance.  
            </p>
          </div>
          <div>
            <h4>"Strive for progress, not perfection."</h4>
            <p>
            You’ll also find unique workout formats designed. We can assure you that your 
             sessions will be more fun, interesting, and less monotonous.  You can find more info about all our workout formats here. 
            
            </p>
          </div>
          <div>
            <h4>"Strive for progress, not perfection."</h4>
            <p>
            If you prefer to workout at home, we've got you covered! You can follow DIY and LIVE
            videos that are meant for both beginner & advanced levels and focus on building strength, stamina & mobility.
            </p>
          </div>
          <div>
            <h4>"Strive for progress, not perfection."</h4>
            <p>
            So mix it up, pick formats that help you achieve your
            personal fitness goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkoutSessions