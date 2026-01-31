import { useState } from "react";

const versions = ["V1", "V2", "V3", "V4", "V5"];

const Header = () => {
  const [activeVersion, setActiveVersion] = useState("V1");

  return (
    <header className="w-full flex items-center justify-center py-6 animate-fade-up">
      <div className="flex items-center gap-4 bg-secondary/80 backdrop-blur-sm rounded-full px-4 py-2">
        <span className="text-sm font-bold tracking-wide text-foreground">
          CLICK
        </span>
        
        <div className="flex items-center gap-0.5">
          {versions.map((version) => (
            <button
              key={version}
              onClick={() => setActiveVersion(version)}
              className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
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
