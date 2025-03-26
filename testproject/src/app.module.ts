import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { CashModule } from './pay/cash/cash.module';
import { CardModule } from './pay/card/card.module';

@Module({
  imports: [LoginModule, CashModule, CardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
