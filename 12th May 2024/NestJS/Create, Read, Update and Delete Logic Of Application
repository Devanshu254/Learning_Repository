import { Controller, Post, Body, Get, Param, Put, Delete} from "@nestjs/common";
import { CreateUserDTO } from "./dto";

let USERS = [];

@Controller('/users')
export class UserController {
    @Post()
    addUser(@Body() createUserDto: CreateUserDTO) {
        USERS.push(createUserDto);
        return 'User Added';
    }
    @Get()
    getUser() {
        return USERS;
    }
    @Get(":id")
    getUserById(@Param('id') param: number ) {
        return USERS.find((user) => +user.id === +param); // We have done +param, because the param is coming in string format. The id:number is just for reference. Request Data Transformation, we will study in separate video.
    }
    @Put(':id')
    updateUser(@Param('id') id: number, @Body() updateUserDTO: CreateUserDTO) {
        const userIdx = USERS.findIndex((user) => +user.id === +id);
        if(!userIdx) {
            return;
        }
        USERS[userIdx] = updateUserDTO;
    }
    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        USERS = USERS.filter((user) => +user.id != +id)
    }
}
