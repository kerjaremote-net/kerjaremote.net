import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { searchKeyword } from "@/store";
import { Search as SearchIcon, XCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function Search({ className }: { className?: string }) {
  const [search, setSearch] = useState("");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDark(isDark);
  }, []);

  const onClickSearch = () => {
    onSearch();
  };

  const onClear = () => {
    if (search !== "") setSearch("");
    searchKeyword.set("");
  };

  const onSearch = () => {
    searchKeyword.set(search);
  };

  return (
    <div
      className={cn(
        "flex w-full items-center justify-center gap-2 md:gap-4",
        className,
      )}
    >
      <div className={cn("relative flex w-full")}>
        <Input
          placeholder="Enter something..."
          value={search}
          className="h-10 w-full bg-background pl-12 text-sm border-2 shadow-none md:h-12 md:text-base focus-visible:ring-0 focus-visible:ring-offset-0"
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={(event) => {
            if (event.key === "Enter" || event.keyCode === 13) {
              onSearch();
            }
          }}
        />
        <a
          onClick={onClear}
          className={cn(
            "absolute right-4 top-0.5 z-10 translate-y-[50%] md:top-1",
            "cursor-pointer text-muted-foreground opacity-0 transition-all",
            search !== "" && "opacity-100",
          )}
        >
          <XCircle className="size-4 md:size-5" />
        </a>
        <SearchIcon
          className={cn(
            "absolute left-4 top-0.5 translate-y-[50%] md:top-1",
            "size-4 cursor-pointer text-muted-foreground/20 md:size-5",
          )}
        />
      </div>
      <Button
        variant="premium"
        className={cn(
          "h-10 w-32 text-sm font-light md:h-12 md:text-base",
        )}
        onClick={() => onClickSearch()}
      >
        Search
      </Button>
    </div>
  );
}
