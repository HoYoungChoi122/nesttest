import { Injectable } from '@nestjs/common';
import {Cat} from "./dto/cat.dto";

@Injectable()
export class CatService {
    private readonly cats:Cat[] = [];

    addCat(cat: Cat):number{

        this.cats.push(cat);

        return this.cats.length?  1 : 0;

    }

    allCat():string{
        if(this.cats.length){
            return "현재 고양이가 없습니다."
        }else{
            let str : string = "";
            for(let item of this.cats){
                str += `[ 고양이 이름은 : ${item.name}, 나이 : ${item.age}, 종 : ${item.breed} ] / `+"\n"
            }
            return str
        }
    }








}
