import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { NotFoundError } from 'rxjs';

@Injectable()
export class ProfileService {
  create(createProfileDto: CreateProfileDto) {
    return {
      message: 'This action adds a new profile',
      data: createProfileDto,
    };
  }

  findAll() {
    return `This action returns all profile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profile`;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return {
      messaage: `This action updates a #${id} profile`,
      data: {
        updateProfileDto,
      },
    };
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
