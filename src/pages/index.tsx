import { Button } from "~/components/ui/button";
import { useToast } from "~/components/ui/use-toast";

export default function Home() {
  const { toast } = useToast();

  return (
    <div>
      <h1>Hello World</h1>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            description: "Your message has been sent.",
          });
        }}
      >
        Show Toast
      </Button>
    </div>
  );
}
