import { expect, test } from 'vitest';

test('preload', () => {
  test('1', () => {
    expect(1).toBeTruthy();
  });
});

// import { render } from "@testing-library/react";
// import { expect, test } from "vitest";
// import ReactiveCounter from '../src/components/ReactiveCounter.vue';

// test('ReactiveHash component', async () => {
//   expect(ReactiveCounter).toBeTruthy();
//   const wrapper = render(ReactiveCounter);

//   const button = wrapper.get('button');

//   expect(button.text()).toBe('count is: 0');
//   await button.trigger('click');
//   expect(button.text()).toBe('count is: 1');
// });
