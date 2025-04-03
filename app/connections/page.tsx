import type { Metadata } from "next";
import { HorizontalLine } from "@/app/components/HorizontalLine";
import { GridWrapper } from "@/app/components/GridWrapper";

type Connection = {
  name: string;
  profile_picture: string;
  socialLink: string;
  isConnected: boolean;
  connectedDate?: Date;
};

export const metadata: Metadata = {
  title: "Connections | Your App Name",
  description: "Manage your connections and network",
};

const connections: Connection[] = [
  {
    name: "Tejas Kumar",
    profile_picture: "/connections/Tejas Kumar.jpeg",
    connectedDate: new Date("1/30/24"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Sarah Shook",
    profile_picture: "/connections/SarahShook.jpeg",
    connectedDate: new Date("11/23/2022"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Danny Thompson",
    profile_picture: "/connections/DannyThompson.jpeg",
    connectedDate: new Date("11/23/22"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Kyle Shook",
    profile_picture: "/connections/Kyle Shook.jpeg",
    connectedDate: new Date("02/13/2023"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "James Q Quick",
    profile_picture: "/connections/James Q Quick.jpeg",
    connectedDate: new Date("01/15/2023"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Clark Sell",
    profile_picture: "/connections/Clark Sell.jpeg",
    connectedDate: new Date("01/15/2023"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Amy Dutton",
    profile_picture: "/connections/Amy Dutton.jpeg",
    connectedDate: new Date("01/15/2023"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Shashi Lo",
    profile_picture: "/connections/shashi.jpeg",
    connectedDate: new Date("01/15/2023"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Taylor Desseyn",
    profile_picture: "/connections/Taylor Desseyn.jpeg",
    connectedDate: new Date("01/15/2023"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Bekah",
    profile_picture: "/connections/Bekah.jpeg",
    connectedDate: new Date("01/15/2023"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Brad Garropy",
    profile_picture: "/connections/brad.jpeg",
    connectedDate: new Date("01/15/2023"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Brian Morrison II",
    profile_picture: "/connections/Brian.jpeg",
    connectedDate: new Date("01/15/2023"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Tessa Kriesel",
    profile_picture: "/connections/Tessa Kriesel.jpeg",
    connectedDate: new Date("01/30/2024"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Kevin Powell",
    profile_picture: "/connections/Kevin Powell.jpeg",
    connectedDate: new Date("01/30/2024"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Ben Lesh",
    profile_picture: "/connections/Ben Lesh.jpeg",
    connectedDate: new Date("01/30/2024"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Jesse Hall",
    profile_picture: "/connections/Jesse Hall.jpeg",
    connectedDate: new Date("01/29/2024"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Eddy Vinck",
    profile_picture: "/connections/Eddy Vinck.jpeg",
    connectedDate: new Date("01/29/2024"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Mark Techson",
    profile_picture: "/connections/Mark Techson.jpeg",
    connectedDate: new Date("01/29/2024"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Quincy Larsen",
    profile_picture: "/connections/Quincy Larsen.jpeg",
    connectedDate: new Date("12/05/24"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Leon Noel",
    profile_picture: "/connections/Leon Noel.jpeg",
    connectedDate: new Date("12/05/24"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Aaron Francis",
    profile_picture: "/connections/Aaron Francis.jpeg",
    connectedDate: new Date("12/04/24"),
    socialLink: "https://x.com/aarondfrancis",
    isConnected: true,
  },
  {
    name: "Dan Spratling",
    profile_picture: "/connections/Dan Spratling.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Keenan Payne",
    profile_picture: "/connections/Keenan Payne.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
    connectedDate: new Date("03/26/2025"),
  },
  {
    name: "Samantha Ming",
    profile_picture: "/connections/Samantha Ming.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Wes Bos",
    profile_picture: "/connections/Wes Bos.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Chris Coyier",
    profile_picture: "/connections/Chris Coyier.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Adam Wathan",
    profile_picture: "/connections/Adam Wathan.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Catalin Pit",
    profile_picture: "/connections/Catalin Pit.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Steve Schoger",
    profile_picture: "/connections/Steve Schoger.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Aaron Iker",
    profile_picture: "/connections/Aaron Iker.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Florin Pop",
    profile_picture: "/connections/Florin Pop.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Telmo",
    profile_picture: "/connections/telmo.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Meng To",
    profile_picture: "/connections/Meng To.png",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Simon Vrachliotis",
    profile_picture: "/connections/Simon Vrachliotis.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Cassie Evans",
    profile_picture: "/connections/Cassie Evans.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Robin Malfait",
    profile_picture: "/connections/Robin Malfait.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Kass",
    profile_picture: "/connections/Kass.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Sam Julien",
    profile_picture: "/connections/Sam Julien.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Curtis Einsmann",
    profile_picture: "/connections/Curtis Einsmann.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Paul Hudson",
    profile_picture: "/connections/Paul Hudson.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Kapehe",
    profile_picture: "/connections/Kapehe.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Chris Sev",
    profile_picture: "/connections/ChrisSev.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Gavin Nelson",
    profile_picture: "/connections/Gavin Nelson.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Marc Backes",
    profile_picture: "/connections/Marc Backes.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Ben Awad",
    profile_picture: "/connections/Ben Awad.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Syed Fazle Rahman",
    profile_picture: "/connections/Syed Fazle Rahman.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Sandeep Panda",
    profile_picture: "/connections/Sandeep.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Jason Lengstorf",
    profile_picture: "/connections/Jason Lengstorf.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
    connectedDate: new Date("03/24/2025"),
  },
  {
    name: "Michael Chan",
    profile_picture: "/connections/michael_chan.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
    connectedDate: new Date("03/24/2025"),
  },
  {
    name: "Tanner Linsley",
    profile_picture: "/connections/tanner_linsley.jpg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
    connectedDate: new Date("03/26/2025"),
  },
  {
    name: "Shawn Wang",
    profile_picture: "/connections/Shawn.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Marko Denic",
    profile_picture: "/connections/Marko Denic.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Brian Lovin",
    profile_picture: "/connections/Brian Lovin.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Nimrod Kramer",
    profile_picture: "/connections/Nimrod Kramer.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Ido Shamun",
    profile_picture: "/connections/Ido Shamun.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Monica Lent",
    profile_picture: "/connections/Monica Lent.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Cassidy Williams",
    profile_picture: "/connections/Cassidy Williams.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Kyle Gill",
    profile_picture: "/connections/KyleGill.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Colby Fayock",
    profile_picture: "/connections/Colby Fayock.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Derek N. Davis",
    profile_picture: "/connections/Derek N. Davis.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Sam Selikoff",
    profile_picture: "/connections/Sam Selikoff.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Samuel Kraft",
    profile_picture: "/connections/Samuel.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Tony Dinh",
    profile_picture: "/connections/Tony Dinh.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Andrew Clark",
    profile_picture: "/connections/Andrew Clark.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Alex Trost",
    profile_picture: "/connections/Alex Trost.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Amit Sheen",
    profile_picture: "/connections/Amit Sheen.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Drew Bredvick",
    profile_picture: "/connections/Drew Bredvick.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Maggie Appleton",
    profile_picture: "/connections/Maggie Appleton.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Tapas Adhikary",
    profile_picture: "/connections/Tapas Adhikary.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Nat Miletic",
    profile_picture: "/connections/Nat.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Todd Motto",
    profile_picture: "/connections/Todd Motto.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Josh W. Comeau",
    profile_picture: "/connections/Josh W. Comeau.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Jon Meyers",
    profile_picture: "/connections/Jon Meyers.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Paul Copplestone",
    profile_picture: "/connections/Paul.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Chris Nicholas",
    profile_picture: "/connections/Chris Nicholas.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Debbie O'Brien",
    profile_picture: "/connections/Debbie.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Ahmad Shadeed",
    profile_picture: "/connections/Ahmad Shadeed.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Kent C. Dodds",
    profile_picture: "/connections/Kent C. Dodds.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
    connectedDate: new Date("03/25/2025"),
  },
  {
    name: "Ryan Florence",
    profile_picture: "/connections/Ryan Florence.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Jim Raptis",
    profile_picture: "/connections/jim.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Jordan Singer",
    profile_picture: "/connections/jordan.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Jhey Tompkins",
    profile_picture: "/connections/jhey.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "James",
    profile_picture: "/connections/james.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Delba Oliveria",
    profile_picture: "/connections/Delba Oliveria.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Lee Robinson",
    profile_picture: "/connections/lee_rob.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Guillermo Rauch",
    profile_picture: "/connections/GuillermoRauch.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Chris Bongers",
    profile_picture: "/connections/chris_b.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Scott Spense",
    profile_picture: "/connections/scott.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Sam Larson Disney",
    profile_picture: "/connections/SLDProfile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Sarah Drasner",
    profile_picture: "/connections/Sarah Drasner.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
];

export default function ConnectionsPage() {
  const sortedConnections = [...connections].sort((a, b) => {
    if (a.isConnected === b.isConnected) {
      return a.name.localeCompare(b.name);
    }
    return a.isConnected ? -1 : 1;
  });

  return (
    <div className="relative space-y-16">
      <GridWrapper>
        <h1 className="mx-auto mt-16 max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
          An evolving list of people I&apos;ve met and those I wish to meet.
        </h1>
      </GridWrapper>

      <div className="relative">
        <div className="relative mb-12 grid auto-rows-auto grid-cols-3 place-items-center justify-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          <span className="absolute top-0">
            <HorizontalLine />
          </span>
          {sortedConnections.map((person) => (
            <div
              key={person.name}
              className="group no-underline transition-all duration-500"
            >
              <div className="group inline-block text-center">
                <div
                  className={`relative h-28 w-28 rounded-[20px] border border-border-primary bg-bg-primary p-2 transition-all duration-300 ${
                    person.isConnected
                      ? "group-hover:-translate-y-3 group-hover:border-indigo-400"
                      : ""
                  }`}
                >
                  {person.isConnected && person.connectedDate ? (
                    <div className="absolute -bottom-2 left-1/2 w-full -translate-x-1/2 text-nowrap rounded-full bg-indigo-400 px-1.5 py-1 text-center text-xs text-white">
                      <span>
                        Met on{" "}
                        <time>
                          {person.connectedDate.toLocaleDateString("en-US", {
                            month: "numeric",
                            day: "numeric",
                            year: "2-digit",
                          })}
                        </time>
                      </span>
                    </div>
                  ) : null}
                  <div
                    className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                    style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
                  >
                    <img
                      className={`h-14 w-14 rounded transition-all duration-300 ${
                        !person.isConnected ? "grayscale" : ""
                      }`}
                      alt={person.name}
                      src={person.profile_picture}
                    />
                  </div>
                </div>
                {person.name && (
                  <div className="mt-3">
                    <p className="text-sm text-gray-500">{person.name}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
          <span className="absolute bottom-0">
            <HorizontalLine />
          </span>
        </div>
      </div>
    </div>
  );
}
