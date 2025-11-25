import { Button } from "./ui/button";
import icon from "@/assets/images/icon.png";

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b z-50 dark:bg-black/80">
      <div className="container mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <a href="/" className="text-xl flex items-center gap-2">
              <img src={icon.src} alt="KerjaRemote.net" className="w-12 h-12 rounded-full" />
              <span className="hidden md:inline">KerjaRemote.net</span>
            </a>
            <div className="hidden md:flex items-center gap-4">
              <a href="/panduan" className="text-sm mx-md-2 hover:text-gray-600 dark:hover:text-gray-300">Panduan</a>
              <a href="/remote-kits" className="text-sm mx-md-2 hover:text-gray-600 dark:hover:text-gray-300">Remote Kits</a>
              <a href="/tools" className="text-sm mx-md-2 hover:text-gray-600 dark:hover:text-gray-300">Tools</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://discord.gg/T4mxkNHh8u" target="_blank">
              <Button variant="ghost" size="sm" className="gap-2">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
                </svg>
                Kerja Remote Community
              </Button>
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScSLgaGafWBGdrOUxRn1RUbk_Ie8O-YEkvPcUFKSKefN--JMQ/viewform?usp=header" target="_blank">
              <Button variant="default" size="sm" className="bg-[linear-gradient(180deg,#454545_0%,#000000_50%,#454545_100%)] text-white hover:opacity-90 border-none btn-3d-black rounded-xl">
                Subscribe
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}