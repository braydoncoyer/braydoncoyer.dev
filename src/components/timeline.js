import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import TimelineYear from './timeline-year';

const TimelineSection = () => (
  // const data = useStaticQuery(graphql`
  //   {
  //     allContentfulTimelineYear(sort: { fields: yearTitle, order: DESC }) {
  //       edges {
  //         node {
  //           yearTitle
  //           timelineItem {
  //             itemTitle
  //             description {
  //               description
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  <section className="mb-24">
    <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-lightBlue-500 dark:text-lightBlue-400 mb-3">
      Timeline
    </h2>
    <p className="text-coolGray-900 dark:text-white text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-3">
      Some things to note.
    </p>

    {/* {data.allContentfulTimelineYear.edges.map((year, id) => (
        <TimelineYear key={id} timelineYear={year} />
      ))} */}
  </section>
);
export default TimelineSection;
