import React from 'react';
import { Layout, SEO } from '../components/common';
import { Intro, Skills, Contact, Projects } from '../components/landing';

const Index = () => (
  <Layout>
    <SEO />
    <Intro />
    <Skills />
    <Projects />
    <Contact />
  </Layout>
);

export default Index;
