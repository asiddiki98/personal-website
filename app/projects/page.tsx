import Project from "@/components/Project";

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Project
          website="https://webflix-aa.herokuapp.com/#/"
          gif="/webflix.gif"
          name="Webflix"
          unoptomized={true}
          stack={["React", "Ruby on Rails", "PostgreSQL"]}
          description="A Netflix clone that allows users to watch trailers and view information about movies."
        >
          <ul className="list-disc list-inside flex flex-col gap-2 glossy-text p-4">
            <li>
              Incorporated AWS S3 to implement efficient storage and retrieval
              of media allowing for users to have a broad selection of movies to
              browse and watch.
            </li>
            <li>
              Leveraged polymorphic association to create reference for genres,
              in order to search and display movies by genre.
            </li>
            <li>
              Implemented a unique live search feature by improving efficiency
              and size of API service requests effectively reducing loading time
              by 80% and updating displayed videos with each keystroke, creating
              a seamless user experience.
            </li>
          </ul>
        </Project>
        <Project
          website="https://talentshare-e66bbedb7744.herokuapp.com/#/"
          gif="/like_comment_demo.gif"
          unoptomized={true}
          name="TalentShare"
          stack={["MongoDB", "Express", "React", "Node.js"]}
          description="A social media platform that allows users to share their talents with the world."
        >
          <ul className="list-disc list-inside flex flex-col gap-2 glossy-text p-4">
            <li>
              Led a team of four in design and development of the application,
              from backend to frontend, within a limited time constraint.
            </li>
            <li>
              Directed response data from API and employed event listeners and
              React lifecycle methods to dynamically change categorization of
              submissions.
            </li>
            <li>
              Implemented associations between users interactions and posts in
              order to update likes and comments.
            </li>
          </ul>
        </Project>
        <Project
          website="https://asiddiki98.github.io/Dino-Might/"
          gif="/dinomight.gif"
          unoptomized={true}
          name="Dino-Might"
          stack={["JavaScript", "HTML", "CSS"]}
          description="A game where the player controls a dinosaur that must jump over dynamite."
        >
          <ul className="list-disc list-inside flex flex-col gap-2 glossy-text p-4">
            <li>
              Developed a unique and interactive game design and UI, through the
              use of CSS keyframes and animations.
            </li>
            <li>
              Implemented precise collision logic to detect if the dinosaur
              object has come in contact with the dynamite object.
            </li>
            <li>
              Generated levels strategically and varied the speed and difficulty
              of the game as the game continues in order to increase
              replayability by keeping the game challenging and entertaining.
            </li>
          </ul>
        </Project>
      </div>
    </main>
  );
}
