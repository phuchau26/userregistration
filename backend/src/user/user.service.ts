import {
  Injectable,
  ConflictException,
  NotFoundException,
  BadRequestException
} from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import { CreateUserDto } from './dto/create-user-dto';
import { User } from './user.schema';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, password } = createUserDto;

    // Kiểm tra email có tồn tại
    if (!email) {
      throw new BadRequestException('Email is required');
    }

    // Kiểm tra định dạng email
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new BadRequestException('Invalid email format');
    }

    // Kiểm tra mật khẩu có tồn tại
    if (!password) {
      throw new BadRequestException('Password is required');
    }

    // Kiểm tra email đã tồn tại
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    // Khai báo khóa bí mật (pepper)
    const SECRET_KEY = process.env.PASSWORD_SECRET || '';

    if (!SECRET_KEY) {
      throw new Error('PASSWORD_SECRET is not set in environment variables');
    }


    // Nối password với secret key trước khi hash
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password + SECRET_KEY, saltRounds);


    // Tạo user với mật khẩu đã hash
    const userToCreate = {
      ...createUserDto,
      password: hashedPassword,
    };

    return this.userRepository.create(userToCreate);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async findById(id: string): Promise<User> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }


  async update(
    id: string,
    updateUserDto: Partial<CreateUserDto>,
  ): Promise<User> {
    const updatedUser = await this.userRepository.update(id, updateUserDto);
    if (!updatedUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return updatedUser;
  }

  async delete(id: string): Promise<User> {
    const deletedUser = await this.userRepository.delete(id);
    if (!deletedUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return deletedUser;
  }
}
