function Summary() {
  return (
    <div className="bg-white !mt-0 p-4 text-black">
      <div className="flex flex-col bg-white p-4 space-x-8 md:flex-row md:p-8 md:space-x-12">
        <div className="flex-none w-28">
          <h1 className="">
            📖{" "}
            <b>
              <u>Education</u>
            </b>
          </h1>
        </div>

        <div className="flex-wrap text-xs md:text-lg ">
          <br className="md:hidden" />
          <h3>Adamson University</h3>
          <p>Bachelor of Science in Information Technology (2006 - 2010)</p>
          <p> Graduate with Honours (Cum Laude) </p>
        </div>
      </div>

      <hr />

      <div className="flex flex-col bg-white p-4 space-x-8 md:flex-row md:p-8 md:space-x-12">
        <div className="flex-none w-28">
          <h1>
            💻{" "}
            <b>
              <u>Work</u>
            </b>
          </h1>
        </div>

        <div className="flex-wrap text-xs md:text-lg ">
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
            <li>• Mentor and coach colleagues</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="flex flex-col bg-white p-4 space-x-8 md:flex-row md:p-8 md:space-x-12">
        <div className="flex-none w-28">
          <h1>
            🔥{" "}
            <b>
              <u>Skills</u>
            </b>
          </h1>
        </div>

        <div className="flex-wrap text-xs md:text-lg">
          <br className="md:hidden" />
          <h1>
            <i>
              <b>Tech Stacks</b>
            </i>
          </h1>
          <br />
          <ul>
            <li>Programming Language: Java and Javascript</li>
            <li>Database: Mongo, Postgre, Mysql, Oracle and Sql server</li>
            <li>Version Control: Github, Bitbucket, SVN and Tortoise</li>
            <li>
              Continuous Integration Tools: Jenkins, Fastlane and AWS CodeBuild
            </li>
            <li>
              Dev Tools: Postman, Buildkite, Trello, Waffle, Confluence and Jira
              AWS : [S3, EC2, Route 53, Cloudfront and CodeBuild]
            </li>
          </ul>

          <br />
          <hr />
          <br />

          <h1>
            <i>
              <b>Mobile Technologies (Android)</b>
            </i>
          </h1>
          <br />
          <ul>
            <li>DB and ORM: Sqlite, Realm and ActiveAndroid</li>
            <li>IDE: Android Studio and IntelliJ</li>
            <li>
              Tools and Libraries: Authentication : [Facebook, Google, Twitter
              and Auth0 SDK] Firebase SDK : [Auhtentication, Database, Remote
              Config, AdMob] Google SDK : [Maps, Analytics, Authentication,
              YoutubePlayer, VR - Virtual Reality] Payment Gateway : [Paypal,
              and Visacheckout SDK] Ads SDK : [Offertoro, Ironsource and Fyber]
              Other SDK : [RX Java, Butterknife, UrbanAirship, Gimbal (Geo
              Fencing), Fabric (Crashlytics), Volley, Websockets, VoiceMod SDK,
              Graphing Libraries, Push Notifications, Glide, Picasso, Twillio
              Deeplinking and Material design]
            </li>
          </ul>

          <br />
          <hr />
          <br />

          <h1>
            <i>
              <b>Mobile Technologies (React Native)</b>
            </i>
          </h1>
          <br />
          <ul>
            <li>Platforms: Android and IOS</li>
            <li>
              Tools and Libraries: Redux, Redux Thunk, Firebase SDK, Fabric,
              React Navigation, Deeplinking (Appsflyer) , Push Notifications AWS
              Amplify, Google Maps and Web Sockets Payment Gateway : [Paypal and
              Stripe SDK]
            </li>
          </ul>

          <br />
          <hr />
          <br />

          <h1>
            <i>
              <b>Web Technologies</b>
            </i>
          </h1>
          <br />
          <ul>
            <li>
              Frameworks: React.js, Angular.js, Bootstrap, EJB, Play, Spring,
              Struts
            </li>
            <li>ORM: Hibernate, Jooq and Ibatis</li>
            <li>IDE: Eclipse, IntelliJ</li>
            <li>
              Tools and Libraries: JQuery, HTML, Bootstrap, Redux, Lint,
              Webpack, CSS/Less CSS, JBoss, Tomcat Payment Gateway : [Paypal and
              Stripe SDK]
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Summary;
