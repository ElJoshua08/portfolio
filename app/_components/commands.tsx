"use client";

import { TypewriterText, TypewriterWords } from "@/components/typewriter";
import { ASCII_ART } from "@/src/contants";
import { useTheme } from "next-themes";

export const useCommands = () => {
  const { setTheme, theme: actualTheme, themes } = useTheme();

  const COMMANDS = {
    help: {
      description: "Display available commands",
      execute: () => (
        <>
          <br />
          <TypewriterWords delay={40}>
            {Object.entries(COMMANDS).map(([key, value]) => (
              <div key={key}>
                <span className="text-accent">{key}</span> - {value.description}
              </div>
            ))}
          </TypewriterWords>
          <br />
        </>
      ),
    },
    fetchinfo: {
      description: "Display personal information",
      execute: () => (
        <>
          <br />
          <TypewriterWords delay={40}>
            <div className="space-y-2">
              <div className="text-primary font-bold">{">"} SYSTEM INFO</div>
              <div className="pl-4 space-y-1">
                <div>
                  <span className="text-muted-foreground">name:</span>{" "}
                  <span className="text-foreground">Josué Díaz Martínez</span>
                </div>
                <div>
                  <span className="text-muted-foreground">role:</span>{" "}
                  <span className="text-foreground">Front-End Developer</span>
                </div>
                <div>
                  <span className="text-muted-foreground">location:</span>{" "}
                  <span className="text-foreground">Cantabria, Spain</span>
                </div>
                <div>
                  <span className="text-muted-foreground">experience:</span>{" "}
                  <span className="text-foreground">3+ years</span>
                </div>
                <div>
                  <span className="text-muted-foreground">age:</span>{" "}
                  <span className="text-foreground">17</span>
                </div>
              </div>
              <div className="pt-2 text-muted-foreground text-sm">
                -~-~-~-~-~-~-~-~
                <br />
                Passionate about building scalable web applications and clean
                code architecture.
                <br />
                -~-~-~-~-~-~-~-~
                <br />
              </div>
            </div>
          </TypewriterWords>
          <br />
        </>
      ),
    },
    github: {
      description: "Open GitHub profile",
      execute: () => {
        setTimeout(() => {
          window.open("https://github.com/ElJoshua08", "_blank");
        }, 1500);
        return (
          <div className="text-accent">
            <TypewriterText
              text="Opening GitHub profile..."
              delay={30}
            />
          </div>
        );
      },
    },
    contact: {
      description: "Display contact information",
      execute: () => (
        <>
          <br />
          <TypewriterWords delay={40}>
            <div className="space-y-2">
              <div className="text-primary font-bold">{">"} CONTACT INFO</div>
              <div className="pl-4 space-y-1">
                <div>
                  <span className="text-muted-foreground">github:</span>{" "}
                  <a
                    href="https://github.com/ElJoshua08"
                    className="text-accent underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/ElJoshua08
                  </a>
                </div>
                <div>
                  <span className="text-muted-foreground">instagram:</span>{" "}
                  <a
                    href="https://instagram.com/el_.joshua"
                    className="text-accent underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    instagram.com/el_.joshua
                  </a>
                </div>
              </div>
            </div>
          </TypewriterWords>
          <br />
        </>
      ),
    },
    clear: {
      description: "Clear the terminal screen",
      execute: () => null, // handled by terminal
    },
    theme: {
      description: "Change terminal theme (light, dark, toggle)",
      execute: (arg: string) => {
        if (!arg)
          return (
            <>
              <br />
              <TypewriterWords delay={10}>
                <div>
                  <span className="text-accent">Available commands:</span>
                  <br />
                  <span className="text-muted-foreground">
                    theme get - Get current theme
                  </span>
                  <br />
                  <span className="text-muted-foreground">
                    theme set [light|dark] - Change theme to light or dark
                  </span>
                  <br />
                  <span className="text-muted-foreground">
                    theme toggle - Toggle theme between light and dark
                  </span>
                  <br />
                  <span className="text-muted-foreground">
                    theme list - List available themes
                  </span>
                </div>
              </TypewriterWords>
              <br />
            </>
          );

        const args = arg.split(" ");

        if (args[0] === "get") {
          return (
            <>
              <br />
              <TypewriterWords>
                <div className="text-primary font-bold">{">"} THEME</div>
                <div className="pl-4 space-y-1">
                  <div>
                    <span className="text-muted-foreground">theme:</span>{" "}
                    <span className="text-foreground">
                      {actualTheme?.toUpperCase()}
                    </span>
                  </div>
                </div>
              </TypewriterWords>
              <br />
            </>
          );
        }

        if (args[0] === "list") {
          return (
            <>
              <br />
              <TypewriterWords delay={60}>
                <span className="text-muted-foreground">available themes</span>
                <br />
                <br />
                {themes.map((theme, idx) => (
                  <div key={idx}>
                    <span className="text-accent">{theme.toUpperCase()}</span>
                  </div>
                ))}
              </TypewriterWords>
              <br />
            </>
          );
        }

        if (args[0] === "set") {
          if (args[1] === "light" || args[1] === "dark") {
            setTheme(args[1]);
            return;
          }
        }

        if (args[0] === "toggle") {
          const newTheme = actualTheme === "light" ? "dark" : "light";
          setTheme(newTheme);
          return;
        }
      },
    },
    rickroll: {
      description: "Just because I can",
      execute: () => {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        return null;
      },
    },
    resume: {
      description: "Get a look at my resume",
      execute: () => {
        window.open("/cv.pdf", "_blank");
        return null;
      },
    },
    ascii: {
      description: "Show me the ASCII art",
      execute: () => (
        <>
          <br />
          <TypewriterWords delay={5}>
            <pre className="leading-[1.19rem]">{ASCII_ART}</pre>
          </TypewriterWords>
        </>
      ),
    },
  };

  return COMMANDS;
};
