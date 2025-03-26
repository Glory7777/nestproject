import { Controller, Post } from '@nestjs/common';
import { loginparam, loginparam2 } from './dto/logon.dto';

@Controller('login')
export class LoginController {
  @Post('loginproc')
  loginproc() {
      const cc = {
        id: 1,
        pw: '1234',
      };
      as loginparam;

      const aa = this.add(5, 7, cc);
 
      const bb = typeof aa === 'number' ? 100 : "100";

      const ff: string = '10'
      
    }
    add(a: number, b: number, dd: loginparam2): number {
        console.log(dd);
        return a + b;
    
}
