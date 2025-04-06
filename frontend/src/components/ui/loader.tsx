import { Loader2 } from "lucide-react";

function Loader() {
  return (
    <section className="fixed h-screen w-screen flex justify-center items-center -translate-y-10">
      <Loader2 className="animate-spin" />
    </section>
  );
}

export default Loader;
