import { useState } from "react";

const versions = ["V1", "V2", "V3", "V4", "V5"];

const Header = () => {
  const [activeVersion, setActiveVersion] = useState("V1");

  return (
    <header className="w-full flex items-center justify-center py-6 animate-fade-up">
      <div className="flex items-center gap-6">
        <span className="text-sm font-bold tracking-wide text-foreground">
          CLICK
        </span>
        
        <div className="flex items-center gap-1">
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
