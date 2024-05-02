import { ApiProperty } from "@nestjs/swagger";

export class RegisterUserRequest {
    @ApiProperty({
        example: 'test',
        description: 'Username',
    })
    username: string;

    @ApiProperty({
        example: 'password',
        description: 'Password',
    })
    password: string;

    @ApiProperty({
        example: 'test',
        description: 'Name',
    })
    name: string;
}

export class UserResponse {
    @ApiProperty({
        example: 'test',
        description: 'Username',
    })
    username: string;

    @ApiProperty({
        example: 'test',
        description: 'Name',
    })
    name: string;

    @ApiProperty({
        description: 'When user logged in, token will be returned',
    })
    token?: string;
}

export class LoginUserRequest {
    @ApiProperty({
        example: 'test',
        description: 'Username',
    })
    username: string;

    @ApiProperty({
        example: 'password',
        description: 'Password',
    })
    password: string;
}

export class UpdateUserRequest {
    @ApiProperty({
        example: 'test',
        description: 'Name',
    })
    name?: string;

    @ApiProperty({
        example: 'password',
        description: 'Password',
    })
    password?: string;
}
