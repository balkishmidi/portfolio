// src/app/components/projects/projects.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      name: 'Project 1',
      description: 'This is a description of project 1.',
      link: 'https://example.com/project1',
      image: 'path/to/project1-image.jpg'
    },
    {
      name: 'Project 2',
      description: 'This is a description of project 2.',
      link: 'https://example.com/project2',
      image: 'path/to/project2-image.jpg'
    },
    {
      name: 'Project 3',
      description: 'This is a description of project 3.',
      link: 'https://example.com/project3',
      image: 'path/to/project3-image.jpg'
    },
    {
      name: 'Project 4',
      description: 'This is a description of project 4.',
      link: 'https://example.com/project4',
      image: 'path/to/project4-image.jpg'
    },
    {
      name: 'Project 5',
      description: 'This is a description of project 4.',
      link: 'https://example.com/project4',
      image: 'path/to/project4-image.jpg'
    },
    {
      name: 'Project 1',
      description: 'This is a description of project 1.',
      link: 'https://example.com/project1',
      image: 'path/to/project1-image.jpg'
    },
    {
      name: 'Project 2',
      description: 'This is a description of project 2.',
      link: 'https://example.com/project2',
      image: 'path/to/project2-image.jpg'
    },
    {
      name: 'Project 3',
      description: 'This is a description of project 3.',
      link: 'https://example.com/project3',
      image: 'path/to/project3-image.jpg'
    },
    {
      name: 'Project 4',
      description: 'This is a description of project 4.',
      link: 'https://example.com/project4',
      image: 'path/to/project4-image.jpg'
    },
    {
      name: 'Project 5',
      description: 'This is a description of project 4.',
      link: 'https://example.com/project4',
      image: 'path/to/project4-image.jpg'
    }
    // Add more projects as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
