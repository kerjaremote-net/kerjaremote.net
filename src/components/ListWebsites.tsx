import { Badge } from "@/components/ui/badge";
import dataWebsites from "@/data/websites.json";
import { cn } from "@/lib/utils";
import { filteredTags, searchKeyword } from "@/store";
import { useStore } from "@nanostores/react";
import { useMemo } from "react";

export default function ListWebsites() {
  const search = useStore(searchKeyword);
  const tags = useStore(filteredTags);

  const filteredWebsites = useMemo(() => {
    if (!search && tags.length === 0) return dataWebsites;
    return dataWebsites.filter((website) => {
      if (
        tags.length > 0 &&
        !tags.every((tag) => (website.tags as string[]).includes(tag))
      ) {
        return false;
      }
      if (!website.title.toLowerCase().includes(search)) return false;
      return true;
    });
  }, [search, tags]);

  return (
    <div
      className={cn(
        "container mx-auto px-4 md:px-0",
        "grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4",
      )}
    >
      {filteredWebsites.map((website) => (
        <a
          key={website.url}
          className={cn(
            "rounded-lg bg-background p-4 shadow",
            "flex flex-col gap-4",
            "hover:shadow-md transition-all hover:bg-background/80"
          )}
          href={website.url}
          target="_blank"
        >
          <div className="flex gap-3">
            <div className="h-20 w-20 overflow-hidden rounded-lg bg-muted p-2.5">
              <img
                src={
                  website.favicon ||
                  "https://placehold.co/400?text=No%20Picture"
                }
                alt={website.title}
                className="aspect-square h-full w-full rounded-md object-cover"
              />
            </div>
            <p className="flex-1 text-base font-medium leading-snug">{website.title}</p>
          </div>
          <div className="flex flex-1 flex-col justify-between gap-3">
            <div className="flex flex-col gap-2">
              <p className="line-clamp-3 text-sm text-muted-foreground">
                {website.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {website.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="px-2 py-0.5 text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <span className="text-xs text-muted-foreground">
                Last reviewed at{" "}
                <span className="font-medium">{website.lastReviewAt}</span>
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
