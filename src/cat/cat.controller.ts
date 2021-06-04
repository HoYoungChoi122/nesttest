import {Controller, Get, Query} from '@nestjs/common';
import {query} from "express";
import { Cat } from './dto/cat.dto';


@Controller('cat')
export class CatController {

    private cat: Cat;


    @Get("add")
    setCat(@Query() cat:Cat): string {
        this.cat = cat;

        return `입력 되었습니다.`
    }

    @Get("get")
    getCat(): any {

        console.log(this.cat);

        return this.cat
    }



}
