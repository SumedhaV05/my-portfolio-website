import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

interface ExperienceItem {
  name: string;
  src: string;
  index?: number;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  private experienceItems: ExperienceItem[] = [
    {name: "Java", src: "./assets/images/technologies/java.png"},
    {name: "Spring Boot", src: "./assets/images/technologies/spring-boot.png"},
    {name: "MySQL", src: "./assets/images/technologies/mysql.png"},
    {name: "Javascript", src: "./assets/images/technologies/js.png"},
    {name: "Typescript", src: "./assets/images/technologies/ts.png"},
    {name: "Angular", src: "./assets/images/technologies/angular.png"},
    {name: "HTML", src: "./assets/images/technologies/html.png"},
    {name: "CSS", src: "./assets/images/technologies/css.png"},
    {name: "Bootstrap", src: "./assets/images/technologies/bootstrap.png"},
    {name: "Git", src: "./assets/images/technologies/git.png"},
  ];

  // needed to create an infinite-like scroll effect
  get getExperience(): ExperienceItem[] {
    return Array.from({ length: 10 }, (_, i: number) =>
      this.experienceItems.map((item: ExperienceItem, index: number) => ({
        ...item, index: i * this.experienceItems.length + index
      }))
    ).flat();
  }

}
