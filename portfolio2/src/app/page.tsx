'use client'

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/lib/useTheme';
import headshot from '../img/headshot.jpg';
import wwdLogo from '../img/wwdLogo.png';
import projects from '../utils/projects.json';
import AH1 from '../img/AH1.png';
import burger from '../img/burger.png';
import newscycle from '../img/newscycle.png';
import notetaker from '../img/notetaker.png';
import puckman from '../img/puckman.png';
import scheduler from '../img/scheduler.png';

export default function Home() {
    const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-8">
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Introduction />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

function Header({ toggleTheme, theme }: { toggleTheme: () => void, theme: 'light' | 'dark' }) {
  return (
    <header className="flex justify-between items-center mb-8">
      <Image
        src={wwdLogo}
        alt="Wong Web Dev"
        width={65}
        height={65}
        className="rounded-md mb-4 shadow-sm"
      />
      <Button variant="outline" size={'lg'} onClick={toggleTheme} className="dark:text-white">

      {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      <span className="sr-only">Toggle theme</span>
      </Button>
    </header>
  );
}

function Introduction() {
  return (
    <section className="mb-16 text-center">
      <Image
        src={headshot}
        alt="Stu Wong"
        width={200}
        height={200}
        className="rounded-full mx-auto mb-4"
      />
      <h2 className="text-4xl font-bold mb-4">Wong Web Dev</h2>
      <p className="text-xl text-gray-600 dark:text-gray-300">
        Crafting beautiful and functional web experiences
      </p>
    </section>
  );
}

function Skills() {
  const skills = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Express',
    'CSS',
    'Tailwind CSS',
    'HTML',
    'REST APIs',
    'Git',
    'Responsive Design',
    'jQuery',
    'Bootstrap',
    'MySQL',
    'Prisma',
    'MongoDB',
    'Netlify',
    'Heroku',
    'WordPress',
    'Shopify',
  ];

  return (
    <section className="mb-16">
      <h3 className="text-2xl font-bold mb-4">Skills</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const projImgs = [newscycle, scheduler, AH1, notetaker, burger, puckman];

  return (
    <section className="mb-16">
      <h3 className="text-2xl font-bold mb-4">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <Image
                src={projImgs[index]}
                alt={project.title}
                width={300}
                height={200}
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section>
      <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
      <div className="flex justify-center space-x-4">
        <Button variant="outline" asChild>
          <a
            href="https://github.com/swong1200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-2 h-4 w-4" /> GitHub
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a
            href="https://www.linkedin.com/in/stuart-z-wong"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="mailto:swong31@gmail.com">
            <Mail className="mr-2 h-4 w-4" /> Email
          </a>
        </Button>
      </div>
    </section>
  );
}
