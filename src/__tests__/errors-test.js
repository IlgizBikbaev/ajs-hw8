import {ErrorRepository} from "../js/errors.js";

test('there is an error', () => {
    const error  = new ErrorRepository();
    expect(error.translate(2)).toBe('слишком короткое имя');
})

test('Unknown error', () => {
    const error = new ErrorRepository();
    expect(error.translate(7)).toBe('Unknown error');
})

