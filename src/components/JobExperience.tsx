import { View } from "@react-pdf/renderer";
import React from "react";

import JobInfoLocationDate from "./JobInfoLocationDate";
import ListItem from "./ListItem";
import SubHeader from "./SubHeader";

const JobExperience = () => (
  <SubHeader title="Job Experience">

    <JobInfoLocationDate
      title="Full Stack Engineer"
      subtitle="@ Everest LLC"
      location="Tampa, FL"
      start="Oct 2021"
      end="Present"
    />
    <View style={{
      lineHeight: 1.3,
      marginVertical: 5,
    }}>
      {/* Freedom Financial */}
      <ListItem>Modernize Legacy monolithic loan application into 4 separate microservices for a large financial company spanning back end and front end to integrate with legacy codebase working closely with internal teams following Agile methods.</ListItem>
      <ListItem>Worked with Product and Design team as well as a dev team of 12-20 people to complete assigned issues under strict deadlines and outstanding communication skills using productivity and communication tools such as Jira, Slack.</ListItem>
      <ListItem>Utilized software collaboration tools/patterns such as BitBucket, Git Flow, constant Code Reviews, Retrospectives, demos/lunch & learns  and Documentation on Confluence to produce professional and readable code with a leading edge web stack consisting of JavaScript, ReactJS, NextJS, Apollo GraphQL, ExpressJS, Webpack and a mobile first design view.</ListItem>
      <ListItem>Collaborated with QA every sprint for automation and integration testing & unit testing using Jest, Postman and Storybook.</ListItem>
      <ListItem>Spearheaded complete DocuSign contract generation flow using advanced postman tooling such as GraphQL schema automation & scripting to chain multiple scripts using the collection runner reducing manual application for team members.</ListItem>
      <ListItem>Participated in extensive training with Contentful to learn to utilize their SDK and APIs for ecommerce.</ListItem>
      {/* Orchestra */}
      <ListItem>Create a modern web app MVP for Design System collaboration including integrations with Figma, Loom and Slack APIs.</ListItem>
      <ListItem>Build out UI design library from Figma designs with component reusability, accessibility and UX in mind, regular demos/showcases, prioritizing feature delivery within 3 months while having clean code.</ListItem>
      <ListItem>Collaborate with developers using GitHub flow, Code Reviews, Pair Programming, Issue Tracking and robust CI/CD pipelines using tools and technologies including TypeScript, ReactJS, TailwindCSS, Remix, Prisma, PostgreSQL, React-aria, and Vite.</ListItem>
      <ListItem>Constant testing with Vitest, Cypress E2E testing, React Testing Library, Storybook snapshots and Unit Testing.</ListItem>
    </View>

    <JobInfoLocationDate
      title="Full Stack Web Developer"
      subtitle="@ Disciplined Minds Tutoring LLC"
      location="Tampa, FL"
      start="Dec 2017"
      end="Sep 2021"
    />
    <View style={{
      lineHeight: 1.3,
      marginVertical: 5,
    }}>
      {/* Main FileMaker Application & FileMaker Cloud/Server */}
      <ListItem>Reduced 20 man-hours per week developing mission critical application to automate day-to-day administrative tasks.</ListItem>
      <ListItem>Saved costs by 60% by building in house application using Apple FileMaker involving database schema design & modelling, Join Tables to connect many-to-many relationships and automating payments via Authorize.net API.</ListItem>
      <ListItem>Handled tens of thousands of records spread across around 100 tables amidst an ever-growing customer base and implementing database changes for an improved online booking experience during the 2020 coronavirus pandemic.</ListItem>
      <ListItem>Lead educational sessions for team members as a subject matter expert (SME) for FileMaker and Web Technologies.</ListItem>
      <ListItem>Assisted in entire system transition from proprietary server software (FileMaker Server) to AWS EC2, S3 for storage and Route 53 for DNS including backup systems via batch scripts, setting up remote desktop connections and maintaining event logs.</ListItem>
      <ListItem>Increased remote work opportunities by creating a responsive browser version of our main FileMaker application to help employees work from home providing functionality to sign for sessions, write notes and maintain appointment schedules.</ListItem>
      {/* PHP Middleware API & Google Calendar API */}
      <ListItem>Built a Middleware API in PHP with multiple data end points providing access to information such as availability of employees for booking appointments based on existing booked sessions and calendar blocks and retrieving subject availability per tutor.</ListItem>
      <ListItem>Integrated with 3rd party public APIs such as Google Calendar, Gmail and FileMaker APIs via PHP JSON parsing libraries.</ListItem>
      <ListItem>Implemented manual datetime conversion between FileMaker timestamps and ISO-8601 date format including daylight savings calculations since no well known library for dealing with datetime exists in FileMaker.</ListItem>
      {/* Online Booking Site */}
      <ListItem>Made use of React functional components, hooks, React Router, MVC framework, Context API, component libraries (react datepickers), SCSS, Bootstrap & styled components to offer smooth functionality for clients to book online appointments.</ListItem>
    </View>

  </SubHeader>
);

export default JobExperience;
