import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Post()
    async create(@Body() createCatDto: Cat) {
        this.catsService.create(createCatDto);
    }


    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }






    // @Post()
    // create(@Body() createCatDto: CreateCatDto) {
    //     return 'This action adds a new cat';
    // }
    //
    // @Get()
    // findAll(@Query() query: ListAllEntities) {
    //     return `This action returns all cats (limit: ${query.limit} items)`;
    // }
    //
    // @Get("g")
    // findG(@Query() query: ListAllEntities) {
    //
    //     try{
    //         if(query.name==="걸오"){
    //             return `걸오가 맞습니다`;
    //         }else{
    //             return '걸오가 아닙니다.';
    //         }
    //
    //     }catch (e){
    //         return `error 발생 content : ${e.message} `
    //     }
    //
    // }
    //
    // @Get(':id')
    // findOne(@Param('id') id: string) {
    //     return `This action returns a #${id} cat`;
    // }
    //
    // @Put(':id')
    // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    //     return `This action updates a #${id} cat`;
    // }
    //
    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //     return `This action removes a #${id} cat`;
    // }
}