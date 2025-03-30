import Navbar from "@/components/Navbar";
import About from "@/components/About";
export default function Home() {
  return (
    <main className="space-y-10">
      <Navbar />
      <div className="bg-neutral-900 rounded-lg shadow-xl ring-1 ring-zinc-300/10 overflow-hidden p-4">
        <About />
      </div>
    </main>
  );
}
