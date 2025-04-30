import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Cover from "./components/sections/Cover";
import Skills from "./components/sections/Skills";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <div className="text-white">
        <Cover />
        <Skills/>
      </div>
    </div>
  );
}
