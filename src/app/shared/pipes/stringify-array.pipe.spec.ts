import { StringifyArrayPipe } from './stringify-array.pipe';

describe('StringifyArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new StringifyArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
