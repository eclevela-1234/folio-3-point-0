import React from "react";
import profileImage from "../../assets/images/profileimage.jpg";

function About() {
  return (
    <section className="col-md-8 m-auto">
      <img
        src={profileImage}
        id="profileImg"
        className="m-3 rounded-circle"
        style={{ width: "200px" }}
        alt="profile"
      />
      <h2 className="m-3">About me</h2>
      <div className="blurb my-2 bg-light bg-opacity-75 p-1 rounded">
        <p>
          Full stack web developer and data analyst leveraging retail management
          background to design intuitive business applications. Certificates in
          Full Stack Web Development and Data Analytics from the University of
          Richmond.{" "}
        </p>
        <p>
          Proficient in JavaScript, HTML, CSS, Python coding languages in a
          collaborative Git setting. Experience implementing SQL and MongoDB
          databases through object mappers in both Node and Python environments.
          Working knowledge of libraries such as Bootstrap, Bulma, jQuery,
          Plotly, and analysis tools Pandas, Matplotlib, SciKitLearn, R, and
          Tableau.
        </p>
        <p>
          I set aggressive deadlines and order my days for the greatest amount
          of productivity. Because of this I was able to utilize instructional
          time for collaboration and practice. I was honored with the Book Award
          for the highest grades and chosen as commencement speaker for the Full
          Stack program. I’ve achieved career success by design thinking, always
          searching for intuitive ways to improve processes and enhance user
          experiences.
        </p>
        <p>
          Excited to get to work developing applications that provide a broad
          array of business solutions!
        </p>
      </div>

      <h2 className="m-3" id="about">
        The Backstory
      </h2>
      <div className="blurb my-2 bg-light bg-opacity-75 p-1 rounded">
        <p className="">
          I got my first taste of coding on a TI-82, circa Y2K. I created a few
          simple games and eventually dabbled in Visual Basic. Currently I work
          in retail management. I earned my MBA with an analytics focus in
          2020. Completing my data analytics and visualization certificate in
          2021, I revived my true love of coding. My passion is solving real
          world problems with technical solutions that meet people where they
          are.
        </p>
        <p className="">
          I completed my full stack boot camp certificate in November 2022! I am
          confident in my abilties to take on any project and see it through. I
          am most familiar with the MERN stack but I can figure most things out
          and enjoy working on a team. I also have experience with Python, R,
          VBA, Tableau, and other analytics apps. I have tenacious work ethic,
          working many late nights and sacrificing my weekends to learn this
          skillset! I am excited to take my skills, experience, and knowledge as
          I pivot into a more technical role in full stack development!
        </p>
        <p className="">
          I spend my nights and weekends with my wife, three children, and toy
          poodle. We like to travel all across the globe whenever we can. Lately
          we've been doing a lot of camping and hiking up and down the east
          coast. I also enjoy tinkering on my '87 Chevy Suburban. I will always
          work hard so when the time comes, I can enjoy those moments.
        </p>
        <p className="">
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
