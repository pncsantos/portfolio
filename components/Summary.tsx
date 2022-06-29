import TechLogo from "./TechLogo";

function Summary() {
  return (
    <div className="!mt-0 py-4 sm:p-4 text-white">
      <div className="flex flex-col px-4 py-2 space-x-8 md:flex-row md:py-4 md:px-8 md:space-x-12">
        <div className="flex-none w-32 lg:ml-40">
          <h1 className="">
            📖{" "}
            <b>
              <u>Education</u>
            </b>
          </h1>
        </div>

        <div className="flex flex-col flex-1 mt-4 sm:mt-0">
          <p className="text-sm md:text-lg font-semibold">Adamson University</p>
          <p className="text-xs md:text-sm">
            Bachelor of Science in Information Technology
            <br className="flex md:hidden" /> (2006 - 2010)
          </p>
          <p className="text-xs md:text-sm">Graduate with Honours</p>
        </div>
      </div>

      <div className="flex flex-col px-4 py-2 space-x-8 md:flex-row md:py-4 md:px-8 md:space-x-12">
        <div className="flex-none w-32 lg:ml-40">
          <h1>
            💻{" "}
            <b>
              <u>Work</u>
            </b>
          </h1>
        </div>

        <div className="flex flex-col flex-1 mt-4 sm:mt-0">
          <ul className="text-xs md:text-sm">
            <li>
              • Full blown development and integration for Web and Mobile
              application
            </li>
            <li>
              • Conceptualize technologies and design for Software application
            </li>
            <li>• Manage Product Releases and Deployments</li>
            <li>• Code Reviews</li>
            <li>• Creates performance test and unit test</li>
            <li>
              • Write modern, performant, maintainable code for a diverse array
              of client and internal projects
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col px-4 py-2 space-x-8 md:flex-row md:py-4 md:px-8 md:space-x-12">
        <div className="flex-none w-32 lg:ml-40">
          <h1>
            🔥{" "}
            <b>
              <u>Skills</u>
            </b>
          </h1>
        </div>

        <div className="flex-wrap">
          {/* General */}
          <div className="flex flex-col flex-1 mt-4 sm:mt-0">
            <p className="text-sm md:text-lg font-semibold">Tech Stacks</p>

            <ul className="text-xs md:text-sm">
              <li className="p-1">Programming Language: Java, Javascript</li>
              <li className="p-1">
                Database: MongoDB, Postgre, Mysql, Oracle, DynamoDB
              </li>
              <li className="p-1">
                DevOps CI/CD: Jenkins, Circle CI, Travis CI, AWS CodeBuild
              </li>
              <li className="p-1">
                Version Control: Github, Bitbucket, SVN, Tortoise
              </li>
              <li className="p-1">
                Productivity Tools: Jira, Trello, Waffle, Confluence
              </li>
              <li className="p-1">
                Dev Tools: Postman, Swagger, Launch Darkly, Fastlane, Buildkite,
                Blazemeter
              </li>
              <li className="p-1">
                AWS Tools: EC2, Cloudfront, S3, Route 53, Lambda, ECS, Xray,
                Dynamo DB
              </li>
              <li className="p-1">Design Tools: Figma, Sketch</li>
              <li className="p-1">
                Loggers: Splunk, Bugsnag, Sentry, Catchpoint, Dynatrace
              </li>
              <li className="p-1">
                Authentication: Facebook, Google, Twilio, Twitter, Auth0, AWS
                Amplify
              </li>
            </ul>
          </div>

          <br />

          <div className="flex flex-row">
            {/* Javascript */}
            <div className="flex flex-col flex-1">
              <div className="flex text-center items-center justify-center">
                <p className="text-sm md:text-lg font-semibold">
                  {"JavaScript"}
                </p>
                <TechLogo logo="/javascript.png" />
              </div>
              {/* Web: React */}
              <div className="border border-dashed border-zinc-400 p-2 sm:px-4 rounded-md">
                <p className="text-xs md:text-sm font-semibold text-[#ccfbf1] underline">
                  {"Web & API Technologies"}
                </p>
                <ul className="text-xs md:text-sm">
                  <li className="p-1">
                    Frameworks: React.js, Next.js, Node.js, Angular.js
                  </li>
                  <li className="p-1">IDE: VSCode, Sublime</li>
                  <li className="p-1">
                    Middlewares: Saga, Thunk, Redux Toolkit
                  </li>
                  <li className="p-1">State Management: Redux, MobX</li>
                  <li className="p-1">
                    Styling Libraries: Styled Components, Tailwind
                  </li>
                  <li className="p-1">
                    Tools and Libraries: Lint, Webpack, Material UI, Express,
                    Storybook, JQuery, HTML, Bootstrap, CSS/Less CSS, Websockets
                    (Pubsub), Google Maps, ESRI, Serverless
                  </li>
                  <li className="p-1">Payment Gateway: Paypal, Stripe</li>
                  <li className="p-1">Test: Jest, Enzyme</li>
                </ul>
              </div>

              <br />

              {/* Mobile: React Native */}
              <div className="border border-dashed border-zinc-400 p-2 sm:px-4 rounded-md">
                <p className="text-xs md:text-sm font-semibold text-[#ccfbf1] underline">
                  {"Mobile : React Native & Ionic"}
                </p>
                <ul className="text-xs md:text-sm">
                  <li className="p-1">Platforms: Android, IOS</li>
                  <li className="p-1">IDE: VSCode, Sublime</li>
                  <li className="p-1">Middlewares: Saga, Thunk</li>
                  <li className="p-1">State Management: Redux</li>
                  <li className="p-1">Styling Libraries: Styled Components</li>
                  <li className="p-1">Payment Gateway: Paypal, Stripe</li>
                  <li className="p-1">
                    Tools and Libraries: Firebase, Fabric, React Navigation,
                    Deeplinking (Appsflyer), Push Notifications, Google Maps,
                    Lotte
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-4 sm:w-10" />

            <div className="flex flex-col flex-1">
              <div className="flex text-center items-center justify-center">
                <p className="text-sm md:text-lg font-semibold">{"Java"}</p>
                <TechLogo logo="/java.png" />
              </div>

              {/* Web: Java */}
              <div className="border border-dashed border-zinc-400 p-2 sm:px-4 rounded-md">
                <p className="text-xs md:text-sm font-semibold text-[#ccfbf1] underline">
                  {"Web & Desktop Technologies"}
                </p>
                <ul className="text-xs md:text-sm">
                  <li className="p-1">Frameworks: Spring, Struts, EJB</li>
                  <li className="p-1">IDE: Eclipse, IntelliJ</li>
                  <li className="p-1">ORM: Hibernate, Jooq, Ibatis</li>
                  <li className="p-1">
                    Tools and libraries: JQuery, HTML, JBoss, Tomcat
                  </li>
                </ul>
              </div>

              <br />

              {/* Mobile: Android Java */}
              <div className="border border-dashed border-zinc-400 p-2 sm:px-4 rounded-md">
                <p className="text-xs md:text-sm font-semibold text-[#ccfbf1] underline">
                  {"Mobile : Android Native"}
                </p>
                <ul className="text-xs md:text-sm">
                  <li className="p-1">
                    DB and ORM: Sqlite, Realm and ActiveAndroid
                  </li>
                  <li className="p-1">IDE: Android Studio and IntelliJ</li>
                  <li className="p-1">
                    Authentication: Facebook, Google, Twitter and Auth0 SDK
                  </li>
                  <li className="p-1">
                    Firebase SDK: Auhtentication, Database, Remote Config, AdMob
                  </li>
                  <li className="p-1">
                    Google SDK: Maps, Analytics, Authentication, YoutubePlayer,
                    VR - Virtual Reality
                  </li>
                  <li className="p-1">
                    Payment Gateway: Paypal, Visacheckout SDK
                  </li>
                  <li className="p-1">
                    Ads SDK : Offertoro, Ironsource and Fyber
                  </li>
                  <li className="p-1">
                    Tools and Libraries: RX Java, Butterknife, UrbanAirship,
                    Gimbal (Geo Fencing), Fabric (Crashlytics), Volley,
                    Websockets, VoiceMod SDK, Graphing Libraries, Push
                    Notifications, Glide, Picasso, Twillio, Deeplinking,
                    Material design
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
