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
      id: 1,
      name: 'RescueFood',
      description: 'Web Application Development Project.',
      image: 'assets/Gra.png'
    },
    {
      id: 2,
      name: 'Symptom Checker',
      description: 'Web Application Development Project.',
      image: 'assets/checker.jpg'
    },
    {
      id: 3,
      name: 'CinéMatch App ',
      description: 'UI/UX Design Project.',
      image: 'assets/cinematch-logo.jpeg'
    },
    {
      id: 4,
      name: 'TEKTAI',
      description: 'Web Application Development Project',
      image: 'assets/tektai.png'
    },
    {
      id: 5,
      name: 'AutoXpress',
      description: 'Web/Mobile/Desktop Development Project',
      image: 'assets/autoxpress.png'
    },
    
    // Add more projects as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
