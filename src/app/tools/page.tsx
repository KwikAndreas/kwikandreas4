import { Description } from "@radix-ui/react-dialog";
import { supabase } from "@/lib/supabase";

const toolsList = [
  {
    title: "",
    desc: "",
    target: "/cipher",
  },
];

export default function Tools() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-white">
          Tools
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Coming Soon!
        </p>
      </div>
    </div>
  );
}
