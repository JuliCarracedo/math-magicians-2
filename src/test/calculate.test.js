import calculate from "../logic/calculate";

describe('Calculate function', ()=>{
    it('exists',()=>{
        expect(calculate).toBeTruthy();
    })
    it('resets the status object when pressing AC',()=>{
        expect(calculate({},'AC')).toStrictEqual( {
            total: null,
            next: null,
            operation: null,
          });
    })
    it('puts the first number imputed inside the next property',()=>{
        expect(calculate({}, '1').next).toBe('1');
    })

    it('concatenates consecutive number keys to build a bigger number ',()=>{
        expect(calculate({next:'1'}, '1').next).toBe('11');
    })

    it('concatenates the decimal point ',()=>{
        expect(calculate({next:'11'}, '.').next).toBe('11.');
    })

    it('inverts the sign with +/- ',()=>{
        expect(calculate({next:'11'}, '+/-').next).toBe('-11');
    })

    it('concatenates the decimal positioned number ',()=>{
        expect(calculate({next:'11.'}, '5').next).toBe('11.5');
    })

    it('moves the stored number to total after selecting an operation ',()=>{
        expect(calculate({next:'11.5'}, 'x').total).toBe('11.5');
    })

    it('defines the desired operation ',()=>{
        expect(calculate({next:'11.5'}, 'x').operation).toBe('x');
    })

    it('stores the second half of the operation in next ',()=>{
        expect(calculate({total:'11.5', operation:'x'}, '2').next).toBe('2');
    })

    it('runs the operation and stores it in total when pressing = ',()=>{
        expect(calculate({total:'11.5', operation:'x',next:'2'}, '=').total).toBe('23');
    })

    it('erases all other data',()=>{
        expect(calculate({total:'11.5', operation:'x',next:'2'}, '=').next).toBeFalsy();
        expect(calculate({total:'11.5', operation:'x',next:'2'}, '=').operation).toBeFalsy();
    })
    
    it('returns empty object with = if you dont have an operation',()=>{
        expect(calculate({next:1},'=')).toStrictEqual({});
    })

});