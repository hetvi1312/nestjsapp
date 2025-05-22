import { Injectable } from '@nestjs/common';
import * as os from 'os'; // Import the os module

@Injectable()
export class AppService {
  getHello(): string {
    const hostname = os.hostname(); // Get the hostname
    return `Hello from VM host: ${hostname}`;
  }
}
