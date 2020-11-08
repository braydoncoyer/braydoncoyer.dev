import React from 'react';
import Layout from '../components/layout';
import SocialIcons from '../components/social';

export default function Toolbox() {
  return (
    <div>
      <SocialIcons>
        <Layout>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold text-primary md:text-4xl">
              <mark>Toolbox</mark>
            </h1>
            <p className="text-secondary">
              Here's a glance of the software and hardware I use on a day-to-day
              basis. This list is ever growning, so check back every hot minute.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-primary md:text-3xl">
              Code Editor
            </h2>
            <ul className="text-secondary">
              <li>Visual Studio Code</li>
              <li>Night Owl - A theme by Sarah Drasner</li>
              <li>
                Bracket Pair Colorizer - A customizable extension for colorizing
                matching brackets
              </li>
              <li>Indent Rainbow - Makes indentation easier to read</li>
              <li>Prettier - Code formatter</li>
              <li>
                Tailwind CSS IntelliSense - Intelligent Tailwind CSS tooling for
                VS Code
              </li>
              <li>VSCode Great Icons - Icon pack</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-primary md:text-3xl">
              Terminal
            </h2>
            <ul className="text-secondary">
              <li>Hyper - A beautiful and extensible terminal experience</li>
              <li>
                hyper-night-owl - A beautiful theme for the Hyper terminal based
                on the Night Owl VSCode theme
              </li>
              <li>Integrated terminal</li>
            </ul>
          </div>
        </Layout>
      </SocialIcons>
    </div>
  );
}
