import type { Metadata } from "next";
import { PageTitle } from "../components/PageTitle";
import { HorizontalLine } from "../components/HorizontalLine";

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
    profile_picture: "/braydoncoyer_profile.jpeg",
    connectedDate: new Date("1/30/24"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Sarah Shook",
    profile_picture: "/braydoncoyer_profile.jpeg",
    connectedDate: new Date("11/23/2022"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Danny Thompson",
    profile_picture: "/braydoncoyer_profile.jpeg",
    connectedDate: new Date("11/23/22"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Kyle Shook",
    profile_picture: "/braydoncoyer_profile.jpeg",
    connectedDate: new Date("02/13/2023"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "James Q Quick",
    profile_picture: "/braydoncoyer_profile.jpeg",
    connectedDate: new Date("01/15/2023"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Clark Sell",
    profile_picture: "/braydoncoyer_profile.jpeg",
    connectedDate: new Date("01/15/2023"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Amy Dutton",
    profile_picture: "/braydoncoyer_profile.jpeg",
    connectedDate: new Date("01/15/2023"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Shashi Lo",
    profile_picture: "/braydoncoyer_profile.jpeg",
    connectedDate: new Date("01/15/2023"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Taylor Desseyn",
    profile_picture: "/braydoncoyer_profile.jpeg",
    connectedDate: new Date("01/15/2023"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Bekah",
    profile_picture: "/braydoncoyer_profile.jpeg",
    connectedDate: new Date("01/15/2023"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Brad Garropy",
    profile_picture: "/braydoncoyer_profile.jpeg",
    connectedDate: new Date("01/15/2023"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Brian Morrison II",
    profile_picture: "/braydoncoyer_profile.jpeg",
    connectedDate: new Date("01/15/2023"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Tessa Kriesel",
    profile_picture: "/braydoncoyer_profile.jpeg",
    connectedDate: new Date("01/30/2024"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Kevin Powell",
    profile_picture: "/braydoncoyer_profile.jpeg",
    connectedDate: new Date("01/30/2024"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Ben Lesh",
    profile_picture: "/braydoncoyer_profile.jpeg",
    connectedDate: new Date("01/30/2024"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Jesse Hall",
    profile_picture: "/braydoncoyer_profile.jpeg",
    connectedDate: new Date("01/29/2024"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Eddy Vinck",
    profile_picture: "/braydoncoyer_profile.jpeg",
    connectedDate: new Date("01/29/2024"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Mark Techson",
    profile_picture: "/braydoncoyer_profile.jpeg",
    connectedDate: new Date("01/29/2024"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Quincy Larsen",
    profile_picture: "/braydoncoyer_profile.jpeg",
    connectedDate: new Date("12/05/24"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Leon Noel",
    profile_picture: "/braydoncoyer_profile.jpeg",
    connectedDate: new Date("12/05/24"),
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "Aaron Francis",
    profile_picture: "/braydoncoyer_profile.jpeg",
    connectedDate: new Date("12/04/24"),
    socialLink: "https://x.com/aarondfrancis",
    isConnected: true,
  },
  {
    name: "Dan Spratling",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Keenan Payne",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Samantha Ming",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Wes Bos",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Chris Coyier",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Adam Wathan",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Catalin Pit",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Steve Schoger",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Aaron Iker",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Florin Pop",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Telmo",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Meng To",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Simon Vrachliotis",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Cassie Evans",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Robin Malfait",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Kass",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Sam Julien",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Curtis Einsmann",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Paul Hudson",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Kapehe",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Chris Sev",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Gavin Nelson",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Marc Backes",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Ben Awad",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Syed Fazle Rahman",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Sandeep Panda",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Jason Lengstorf",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Shawn Wang",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Marko Denic",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Brian Lovin",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Nimrod Kramer",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Ido Shamun",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Monica Lent",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Cassidy Williams",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Kyle Gill",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Jash W. Comeau",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Colby Fayock",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Derek N. David",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Sam Selikoff",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Samuel Kraft",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Tony Dinh",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Andrew Clark",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Alex Trost",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Amit Sheen",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Drew Bredvick",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Maggie Appleton",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Tapas Adhikary",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Nat Miletic",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Todd Motto",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Jon Meyers",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Paul Copplestone",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Chris Nicholas",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Debbie O'Brien",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Ahmad Shadeed",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Kent C. Dodds",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Ryan Florence",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Jim Raptis",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Jordan Singer",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Jhey Tompkins",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "James",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Delba Oliveria",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Lee Robinson",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Guillermo Rauch",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Chris Bongers",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Scott Spense",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Sam Larson Disney",
    profile_picture: "/braydoncoyer_profile.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: false,
  },
  {
    name: "Sarah Drasner",
    profile_picture: "/braydoncoyer_profile.jpeg",
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
    <div className="space-y-[80px] relative">
      <div className="pt-[90px] max-w-3xl mx-auto">
        <PageTitle title="An evolving list of people I've met and those I wish to meet." />
      </div>

      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 auto-rows-auto place-items-center justify-center relative">
          <span className="absolute top-0">
            <HorizontalLine />
          </span>
          {sortedConnections.map((person) => (
            <a
              key={person.name}
              href={person.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline group transition-all duration-500"
            >
              <div className="text-center inline-block group">
                <div
                  className={`rounded-[20px] relative border border-border-primary bg-bg-primary p-2 transition-all duration-300 h-28 w-28 ${
                    person.isConnected
                      ? "group-hover:border-indigo-400 group-hover:-translate-y-3"
                      : ""
                  }`}
                >
                  {person.isConnected && person.connectedDate ? (
                    <div className="px-1.5 py-1 text-xs bg-indigo-400 w-full rounded-full text-white text-center absolute -bottom-2 left-1/2 -translate-x-1/2 text-nowrap">
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
                    className="border-2 h-full rounded-xl border-[#A5AEB81F]/10 bg-[#EDEEF0] grid place-items-center"
                    style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
                  >
                    <img
                      className={`w-14 h-14 rounded transition-all duration-300 ${
                        !person.isConnected ? "grayscale" : ""
                      }`}
                      alt={person.name}
                      src={person.profile_picture}
                    />
                  </div>
                </div>
                {person.name && (
                  <div className="mt-3">
                    <p className="text-gray-500 text-sm">{person.name}</p>
                  </div>
                )}
              </div>
            </a>
          ))}
          <span className="absolute bottom-0">
            <HorizontalLine />
          </span>
        </div>
      </div>
    </div>
  );
}
