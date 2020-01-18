import Packable from '../abstract/Packable';
import AttributePack from '../pack/AttributePack';
import Unhandled from '../util/Unhandled';
import IllegalArgumentException from '../exception/IllegalArgumentException';
import Checker from '../util/Checker';

export default class Attribute implements Packable<AttributePack> {

    private readonly name: string;
    private readonly value: string;

    private constructor(name: string, value: string) {
        this.name = name;
        this.value = value;
    }

    public static from(name: string, value: string): Unhandled<IllegalArgumentException, Attribute> {
        if (!Checker.checkNotNull(name)) {
            return new Unhandled<IllegalArgumentException, Attribute>(new IllegalArgumentException("Name can not be null!"));
        }
        if (!Checker.checkNotNull(value)) {
            return new Unhandled<IllegalArgumentException, Attribute>(new IllegalArgumentException("Value can not be null!"));
        }
        return new Unhandled<IllegalArgumentException, Attribute>(new Attribute(name, value));
    }

    pack(): AttributePack {
        throw new Error("Method not implemented.");
    }

    public getName(): string {
        return this.name;
    }

    public getValue(): string {
        return this.value;
    }
}
