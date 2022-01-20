require('testcafe');
import SamplePage from './sample-page';

const samplePage = new SamplePage()

fixture`Test`
    .page`https://textarea-copypaste.stackblitz.io`


test('ChangeTextAndTextarea', async t=>  {
    const inputText = "Hello";
    const inputTextarea = "Lorem ipsum";

    await samplePage.runProject();
    await samplePage.fillText(inputText);
    await samplePage.fillTextarea(inputTextarea);
    await samplePage.copyAndPasteText();

    await t.expect(samplePage.pastedText.value).eql(inputText);
    await t.expect(samplePage.pastedTextarea.value).eql(inputTextarea);
});
