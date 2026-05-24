import { Link } from "react-router-dom";

import SocialLinks from "./SocialLinks";

const Footer = () => (
  <footer className="mt-auto w-full pt-12">
    <div className="mx-auto flex max-w-content flex-col items-center justify-center page-padding pb-[max(2rem,env(safe-area-inset-bottom))] sm:flex-row-reverse sm:justify-between">
      <SocialLinks />
      <section className="mt-8 text-center sm:mt-0 sm:text-left">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <Link to="/" className="link">
            Hugo Oliveira
          </Link>
        </p>
      </section>
    </div>
  </footer>
);

export default Footer;
