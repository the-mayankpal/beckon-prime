import { useState } from "react";

const versions = ["V1", "V2", "V3", "V4", "V5"];

const Header = () => {
  const [activeVersion, setActiveVersion] = useState("V1");

  return (
    <header className="w-full flex justify-center pt-6 pb-4 animate-fade-up">
      <div className="glass rounded-full px-2 py-2 flex items-center gap-4">
        <span className="text-sm font-bold tracking-wide px-4 text-foreground">
          CLICK
        </span>
        <div className="flex items-center gap-1 bg-secondary/50 rounded-full p-1">
          {versions.map((version) => (
            <button
              key={version}
              onClick={() => setActiveVersion(version)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                activeVersion === version
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {version}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
