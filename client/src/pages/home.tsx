import { Link } from "react-router-dom";

import Button from "../components/ui/button";

function HomePage() {
  return (
    <main>
      <header className="px-6 py-6 max-w-screen-lg mx-auto">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-semibold tracking-tighter">
            social
          </Link>
          <Button>Get Started</Button>
        </nav>
      </header>
      <section className="px-8 flex flex-col items-center gap-y-1.5 mt-20 max-w-screen-sm mx-auto">
        <h1 className="text-5xl font-semibold text-center md:text-7xl">
          Everything you are. In one, simple link in bio.
        </h1>
        <p className="font-medium tracking-tight text-center">
          Join thousands of people using lnk. for their link in bio. One link to
          help you share everything you create, curate and sell from your
          Instagram, TikTok, Twitter, YouTube and other social media profiles.
        </p>
        <Button className="mt-1">Get Started</Button>
      </section>
    </main>
  );
}

export default HomePage;
