import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Website = {
  title: string;
  description: string;
  url: string;
  favicon?: string;
  tags: string[];
  lastReviewAt: string;
}

interface WebsiteDetailModalProps {
  website: Website | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function WebsiteDetailModal({
  website,
  isOpen,
  onOpenChange,
}: WebsiteDetailModalProps) {
  if (!website) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl">{website.title}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-6">
          <div className="flex gap-4">
            <div className="h-24 w-24 overflow-hidden rounded-lg bg-muted p-3">
              <img
                src={website.favicon || "https://placehold.co/400?text=No%20Picture"}
                alt={website.title}
                className="aspect-square h-full w-full rounded-md object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <p className="whitespace-pre-line text-muted-foreground">{website.description}</p>
              <a
                href={website.url}
                target="_blank"
                className="inline-flex w-fit items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Visit Website ↗
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium">Tags</h3>
            <div className="flex flex-wrap gap-1.5">
              {website.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="px-2 py-0.5">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}