import React from "react";
import profileImage from "../../assets/cover/profileimage.jpg";

function About() {
  return (
    <section className="my-2">
      <img
        src={profileImage}
        id="profileImg"
        className=""
        style={{ width: "100%" }}
        alt="profile"
      />
      <h1 className="my-2" id="about">
        The Full Stack
      </h1>
      <div id="blurb" className="my-2">
        <p>
          I got my first taste of coding on a TI-82, circa Y2K. I created a few
          simple games and eventually dabbled in Visual Basic. I probably should
          have stayed the course but life had other plans for me. I've had a
          successful career as a multi-unit retail manager and earned my MBA
          with an analytics focus in 2020. Completing my data analytics and
          visualization certificate in 2021, I realized my true love of coding.
          My passion is solving real world problems with technical solutions
          that meet people where they are.
        </p>
        <p>
          So now I'm back with the full stack! I completed my full stack boot
          camp certificate in November 2022! I am confident in my abilties to
          take on any assignment and see it through. My specialty is the MERN
          stack but I can figure most things out and enjoy working on a team. I
          also have experience with Python, R, VBA, Tableau, and other analytics
          apps. I have tenacious work ethic, working many late nights and
          sacrificing my weekends to learn this skillset! I am excited to take
          my skills, experience, and knowledge as I pivot into a more technical
          role in full stack development!
        </p>
        <p>
          I spend my personal time with my wife, three children, and toy poodle.
          They are my world! We like to travel all across the globe. Lately
          we've been doing a lot of camping and hiking up and down the east
          coast. I also enjoy tinkering on my '87 Chevy Suburban. I will
          always work hard so when the time comes, I can enjoy those moments.
        </p>
        <p>
          Enough about me! While you're here, please take a look at my best work
          to date. I hope you'll enjoy! Please don't hesitate to send me a
          message if you have a project idea, job prospect, or just to say hi.
          Thanks for stopping by!
        </p>
      </div>
    </section>
  );
}

export default About;
