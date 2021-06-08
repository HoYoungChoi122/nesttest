import { IsString,  IsNumber } from 'class-validator';

export class Cat{

    @IsString()
    private _name : string;

    @IsNumber()
    private _age : number;

    @IsString()
    private _breed : string;

    constructor(name: string, age: number, breed: string) {
        this._name = name;
        this._age = age;
        this._breed = breed;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }


    get breed(): string {
        return this._breed;
    }

    set breed(value: string) {
        this._breed = value;
    }


}