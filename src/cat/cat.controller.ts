import {Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Query} from '@nestjs/common';
import {query} from "express";
import { Cat } from './dto/cat.dto';
import {CatService} from "./cat.service";


@Controller('cat')
export class CatController {


    constructor(private catsService:CatService) {}


    @Get()
    async allCat(){
        return this.catsService.allCat();
    }

    @Get("add")
    setCat(@Query() cat:Cat ): string {
        return this.catsService.addCat(cat) ? `${cat.name} 고양이 입력 되었습니다.` : "입력에 실패했습니다";

    }

    @Get("get")
    getCat(): any {
        return this.catsService.allCat();
    }

    @Get("error")
    async getError(){
        // 에러에 대해 발생시키고 reponse 영역에 있는것을 객체형식으로 전달한다.

        // ex 1.
        // return new HttpException('Forbidden',HttpStatus.FORBIDDEN);

        // ex2. 
        throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: '이 메세지는 커스텀된 메세지입니다. 포비던 에러',
        },HttpStatus.FORBIDDEN);
    }

    // 기본 DEFAULT ERROR 발생
    // @Get(":id")
    // async findOne(@Param('id', ParseIntPipe) id: number) {
    // async findOne(@Query('id', ParseIntPipe) id: number) {
    //     return `${id}숫자를 입력하셨습니다.`;
    // }

    // 사용자 정의 ERROR 발생
    @Get(':id')
    async findOne( @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number,) {
        return `${id}숫자를 입력하셨습니다.`;
    }


}
