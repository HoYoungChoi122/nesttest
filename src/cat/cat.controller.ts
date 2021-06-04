import {Controller, Get, Query} from '@nestjs/common';
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



}
