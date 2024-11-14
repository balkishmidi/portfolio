import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {
  project: any;
  sanitizedDescription: SafeHtml | undefined;

  projects = [
    {
      id: 1,
      name: 'Web Application Development Project - RescueFood ',
      year: 'Nov 2024',
      description: `<ul><li>Collaborated with a team to develop the RescueFood web application.</li><li>Developed using Laravel with MySQL database integration.</li></ul>`,
      image: 'assets/Gra.png',
      link: 'https://github.com/Imen-Frigui/Netrunners-Rescue-Food-5TWIN2'
    },
    {
      id: 2,
      name: 'Web Application Development Project – Symptom Checker ',
      year: 'Oct 2024',
      description: `<ul><li>Worked with a team to build a Symptom Checker web application using Django.</li><li>Integrated AI chatbot (Gemini) for enhanced user interaction.</li></ul>`,
      image: 'assets/checker.jpg',
      link: 'https://github.com/Imen-Frigui/Symptom_Checker'
    },
    {
      id: 3,
      name: 'UI/UX Design : CinéMatch App ',
      year: 'Oct 2024',
      description: `Designed a mobile app that simplifies group movie decisions through voting and personalized recommendations, aimed at promoting Tunisian cinema among young adults. Developed engaging UI/UX features, including custom notification settings and collaborative voting functionality, for a seamless social experience. Link Figma`,
      image: 'assets/cinematch-logo.jpeg',
      link: 'https://www.figma.com/design/MSJnfMqcPJJD8YT9AQjTos/Cin%C3%A9Match?node-id=0-1&node-type=canvas&t=vW3yuf5TVthc9HJ7-0'
    },
    {
      id: 4,
      name: 'Web Application Development Project - TEKTAI',
      year: 'January - May 2024',
      description: `
      Contributed to the development of TektAI, a dynamic web platform fosteringcollaboration between industry and data sciencedevelopers. 
      <ul>
      <li>Implemented NestJS for the backend</li>
      <li>Utilized ReactJSfor frontend development</li>
<li>Integrated MongoDBas the database solution</li>
<li>Contributed to the development of automated performance evaluation, team rankings,and a prize allocation process to enhanceuser engagement and innovation</li></ul>`,
      image: 'assets/tektai.png',
      link: 'https://github.com/AtefBadreddine/Tektai-Devtech-4TWIN2/tree/balkis'
    },
    {
      id: 5,
      name: 'Web/Mobile/Desktop Development Project - AutoXpress ',
      year: 'January - May 2023',
       description: `
Development of a carpooling application available on Web, Mobile,and Desktop platforms
      <ul>
      <li>Web development using Symfony.</li>
      <li>Mobile development with Webservices and Codename One.   </li>
<li>Desktop development using JavaFX and Java
</li>
<li>Contributed to the development of automated performance evaluation, team rankings,and a prize allocation process to enhanceuser engagement and innovation</li></ul>`,
     
     
     
      image: 'assets/autoxpress.png',
      link: 'https://github.com/balkishmidi/autoxpress'
    },
    // Add more projects if needed
  ];

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const projectId = +this.route.snapshot.paramMap.get('id')!;
    this.project = this.projects.find(p => p.id === projectId);

    // Sanitize the description to render HTML safely
    if (this.project?.description) {
      this.sanitizedDescription = this.sanitizer.bypassSecurityTrustHtml(this.project.description);
    }
  }

  visitProject(): void {
    if (this.project?.link) {
      window.open(this.project.link, '_blank');
    }
  }
}
