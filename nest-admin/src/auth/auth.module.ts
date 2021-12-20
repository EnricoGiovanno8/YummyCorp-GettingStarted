import { forwardRef, Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { CommonModule } from 'src/common/common.module';
import { AuthService } from './auth.service';

@Module({
  imports: [
    forwardRef(() => UserModule),
    CommonModule
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [
    AuthService
  ]
})
export class AuthModule {}
