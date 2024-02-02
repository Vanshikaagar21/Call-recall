// Import the necessary SVG components
import GithubLogo from "../svg/GithubLogo";
import GmailLogo from "../svg/GmailLogo";

// Define the Footer component, representing the application's footer
export default function Footer() {
  return (
    // Create a footer element with background gradient color and basic information
    <footer className="mt-auto  bg-gradient-to-r from-fourth via-fourth to-white">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-3 pb-2 text-center pt-2 text-gray-800 lg:text-md md:text-md sm:text-md text-base font-semibold tracking-wider">
        <span>&copy; Call-Recall</span>
        <span>Vanshika Agarwal</span>
        <span>SKIT, JAIPUR</span>
        <span>+91-9772710470</span>
        <span>
          <a
            href="https://github.com/Vanshikaagar21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-row justify-center items-center gap-0">
              <GithubLogo /> Vanshikaagar21
            </div>
          </a>
        </span>
        <span>
          <a
            href="mailto:vanshika.agar@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-row justify-center items-center gap-0">
              <GmailLogo />
              vanshika.agar@gmail.com
            </div>
          </a>
        </span>
      </div>
    </footer>
  );
}
