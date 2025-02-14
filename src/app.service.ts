import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'we love nestJS';
  }

  getName(): string {
    return 'Natdanai';
  }

  getInfo(): string {
    return 'Hello, I am Natdanai Choochan, 18 years old';
  }
  
  getJSON() {
    return {
    name: 'Natdanai',
    lastname: 'Choochan',
    age: 18};
  }

  getGithub(): string {
    return 'tast Git and Github using';
  }
}
