import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <div>Chai Page</div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg my-4 hover:bg-blue-700">
        Button
      </button>
      <Button>Shadcn</Button>
    </main>
  );
}
