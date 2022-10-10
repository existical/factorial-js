
const factorial = require('../index');
const { toBeWithinRange } = require('../helpers/toBeWithinRange');

test('Testing factorial of 1 which should be 1', ()=>{
    expect(factorial(1)).toBe('1');
});

test('Testing factorial of 2 which should be 2', ()=>{
    expect(factorial(2)).toBe('2');
});

test('Testing factorial of 5 which should be 120', ()=>{
    expect(factorial(5)).toBe('120');
});

test('Testing factorial of 12 which should be 479001600', ()=>{
    expect(factorial(12)).toBe('479001600');
});

test('Testing factorial of 400 which should be 6403452284...', ()=>{
    expect(factorial(400)).toBe('64034522846623895262347970319503005850702583026002959458684445942802397169186831436278478647463264676294350575035856810848298162883517435228961988646802997937341654150838162426461942352307046244325015114448670890662773914918117331955996440709549671345290477020322434911210797593280795101545372667251627877890009349763765710326350331533965349868386831339352024373788157786791506311858702618270169819740062983025308591298346162272304558339520759611505302236086810433297255194852674432232438669948422404232599805551610635942376961399231917134063858996537970147827206606320217379472010321356624613809077942304597360699567595836096158715129913822286578579549361617654480453222007825818400848436415591229454275384803558374518022675900061399560145595206127211192918105032491008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000');
});

test('Testing factorial of 2 which should be array [ 2 ]', ()=>{
    expect(factorial.array(2)).toStrictEqual([ 2 ]);
});

test('Testing factorial of 4 which should be array [ 4, 2 ]', ()=>{
    expect(factorial.array(4)).toStrictEqual([ 4, 2 ]);
});

test('Testing factorial benchmark of 12 which should be 479001600', ()=>{
    // expect(factorialSync.benchmark(12)).toStrictEqual({time:0, result: '479001600'});

    const fact = factorial.benchmark(12);
    expect(fact.result).toBe('479001600');
    expect(fact.time).toBeWithinRange(0, 10);
});

test('Testing factorial benchmark of 40 which should be 815915283247897734345611269596115894272000000000', ()=>{
    // expect(factorialSync.benchmark(40)).toStrictEqual({time:0, result: '815915283247897734345611269596115894272000000000'});

    const fact = factorial.benchmark(40);
    expect(fact.result).toBe('815915283247897734345611269596115894272000000000');
    expect(fact.time).toBeWithinRange(0, 10);
});

test('Testing factorial of 8 which should be array [ 0, 2, 3, 0, 4 ]', ()=>{
    expect(factorial.array(8)).toStrictEqual([ 0, 2, 3, 0, 4 ]);
});

test('Testing factorial of 40 which should be array [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 7, 2, 4, 9, 8, 5, 1, 1, 6, 9, 5, 9, 6, 2, 1, 1, 6, 5, 4, 3, 4, 3, 7, 7, 9, 8, 7, 4, 2, 3, 8, 2, 5, 1, 9, 5, 1, 8 ]', ()=>{
    expect(factorial.array(40)).toStrictEqual([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 7, 2, 4, 9, 8, 5, 1, 1, 6, 9, 5, 9, 6, 2, 1, 1, 6, 5, 4, 3, 4, 3, 7, 7, 9, 8, 7, 4, 2, 3, 8, 2, 5, 1, 9, 5, 1, 8 ]);
});

test('Testing factorial benchmark of 4 which should be [ 4, 2 ]', ()=>{
    const fact = factorial.benchmark(4,{ array:true} );
    expect(fact.result).toStrictEqual([ 4, 2 ]);
    expect(fact.time).toBeWithinRange(0, 100);
});

// -------------------------------------------- ASYNC

// async/await can be used.
  it('[async/await] factorial of 5 which should be 120', async () => {
    const data = await factorial.async(5);
    expect(data).toBe('120');
  });

  it('[async/await] factorial of 12 which should be 479001600', async () => {
    const data = await factorial.async(12);
    expect(data).toBe('479001600');
  });