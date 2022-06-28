function Summary() {
  return (
    <div className="bg-black !mt-0 p-4 text-black">
      <div className="flex flex-col bg-white p-4 space-x-8 md:flex-row md:p-8 md:space-x-12">
        <div className="flex-none w-32 md:ml-40">
          <h1 className="">
            📖{" "}
            <b>
              <u>EDUCATION</u>
            </b>
          </h1>
        </div>

        <div className="flex-wrap">
          <br className="md:hidden" />
          <p className="text-sm md:text-lg font-semibold">Adamson University</p>
          <p className="text-xs md:text-sm">
            Bachelor of Science in Information Technology (2006 - 2010)
          </p>
          <p className="text-xs md:text-sm">Graduate with Honours</p>
        </div>
      </div>

      <hr />

      <div className="flex flex-col bg-white p-4 space-x-8 md:flex-row md:p-8 md:space-x-12">
        <div className="flex-none w-32 md:ml-40">
          <h1>
            💻{" "}
            <b>
              <u>WORK</u>
            </b>
          </h1>
        </div>

        <div className="flex-wrap text-xs md:text-sm">
          <br className="md:hidden" />
          <ul>
            <li>
              • Full blown development and integration for Web and Mobile
              application
            </li>
            <li>
              • Conceptualize technologies and design for Web and Mobile
              application
            </li>
            <li>• Manage Product Releases and Deployments</li>
            <li>• Review Codes and test both Frontend and Backend</li>
            <li>• Mentor and help junior developers</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="flex flex-col bg-white p-4 space-x-8 md:flex-row md:p-8 md:space-x-12">
        <div className="flex-none w-32 md:ml-40">
          <h1>
            🔥{" "}
            <b>
              <u>SKILLS</u>
            </b>
          </h1>
        </div>

        <div className="flex-wrap">
          <br className="md:hidden" />

          {/* General */}
          <div>
            <p className="text-sm md:text-lg font-semibold">Tech Stacks</p>
            <br />
            <ul className="text-xs md:text-sm">
              <li>Programming Language: Java and Javascript</li>
              <li>Database: Mongo, Postgre, Mysql, Oracle and Sql server</li>
              <li>Version Control: Github, Bitbucket, SVN and Tortoise</li>
              <li>
                Continuous Integration Tools: Jenkins, Fastlane and AWS
                CodeBuild
              </li>
              <li>
                Dev Tools: Postman, Buildkite, Trello, Waffle, Confluence and
                Jira AWS : [S3, EC2, Route 53, Cloudfront and CodeBuild]
              </li>
            </ul>
          </div>

          <br />
          <hr />
          <br />

          {/* Web */}
          <div>
            <p className="text-sm md:text-lg font-semibold">Web Technologies</p>
            <br />
            <ul className="text-xs md:text-sm">
              <li>
                Frameworks: React.js, Angular.js, Bootstrap, EJB, Play, Spring,
                Struts
              </li>
              <li>ORM: Hibernate, Jooq and Ibatis</li>
              <li>IDE: Eclipse, IntelliJ</li>
              <li>
                Tools and Libraries: JQuery, HTML, Bootstrap, Redux, Lint,
                Webpack, CSS/Less CSS, JBoss, Tomcat Payment Gateway : [Paypal
                and Stripe SDK]
              </li>
            </ul>
          </div>

          <br />
          <hr />
          <br />

          {/* React Native */}
          <div>
            <p className="text-sm md:text-lg font-semibold">
              Mobile Technologies (Javascript - React Native)
            </p>
            <br />
            <ul className="text-xs md:text-sm">
              <li>Platforms: Android and IOS</li>
              <li>
                Tools and Libraries: Redux, Redux Thunk, Firebase SDK, Fabric,
                React Navigation, Deeplinking (Appsflyer) , Push Notifications
                AWS Amplify, Google Maps and Web Sockets Payment Gateway :
                [Paypal and Stripe SDK]
              </li>
            </ul>
          </div>

          <br />
          <hr />
          <br />

          {/* Java */}
          <div>
            <p className="text-sm md:text-lg font-semibold">
              Mobile (Java - Android)
            </p>
            <br />
            <ul className="text-xs md:text-sm">
              <li>DB and ORM: Sqlite, Realm and ActiveAndroid</li>
              <li>IDE: Android Studio and IntelliJ</li>
              <li>
                Tools and Libraries: Authentication : [Facebook, Google, Twitter
                and Auth0 SDK] Firebase SDK : [Auhtentication, Database, Remote
                Config, AdMob] Google SDK : [Maps, Analytics, Authentication,
                YoutubePlayer, VR - Virtual Reality] Payment Gateway : [Paypal,
                and Visacheckout SDK] Ads SDK : [Offertoro, Ironsource and
                Fyber] Other SDK : [RX Java, Butterknife, UrbanAirship, Gimbal
                (Geo Fencing), Fabric (Crashlytics), Volley, Websockets,
                VoiceMod SDK, Graphing Libraries, Push Notifications, Glide,
                Picasso, Twillio Deeplinking and Material design]
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
