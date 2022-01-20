# TestCafe-demo

To run this TestCafe test for the demo page:
```
npm i testcafe
testcafe Chrome test-textarea.js
```

Demo page: https://textarea-copypaste.stackblitz.io

Demo page repo: https://github.com/jguann/textarea-copypaste

The demo page and test were created to reproduce a TestCafe bug where the text entered into a `textarea` does not cause a change event to update the value for the textarea's parent element `d2l-input-textarea`.

This test currently fails because of the bug mentioned above, see failure below:

![chrome_KGOQYcVaPd](https://user-images.githubusercontent.com/91085894/150421507-7ca6b32f-9ba1-4a06-a264-ec3281f8ef1b.gif)
