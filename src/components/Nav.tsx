import { Button } from "./ui/button";

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b z-50 dark:bg-black/80">
      <div className="container mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <a href="/" className="text-xl flex items-center gap-2">
              <img src="/images/icon.png" alt="KerjaRemote.net" className="w-12 h-12 rounded-full" />
              KerjaRemote.net
            </a>
            <div className="hidden md:flex items-center gap-4">
              {/* <a href="/jobs" className="text-sm hover:text-gray-600">Remote Jobs</a> */}
              {/* <a href="/tools" className="text-sm hover:text-gray-600">Tools</a> */}
              {/* <a href="/learn" className="text-sm hover:text-gray-600">Learn</a> */}
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* <Button variant="ghost" size="sm">Sign In</Button> */}
            <a href="https://tally.so/r/wd8B1z" target="_blank">
              <Button variant="default" size="sm" className="bg-black text-white hover:bg-gray-800">
                Submit Website
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}