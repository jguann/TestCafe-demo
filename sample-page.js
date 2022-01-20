import {Selector, t} from 'testcafe';

class SamplePage {

    constructor() {
        this.runProjectButton = Selector('button').withText("Run this project");
        
        this.samplePageShadowRoot = Selector('sample-page').shadowRoot();

        this.inputText = this.samplePageShadowRoot.find('input#inputText');

        this.inputTextarea = this.samplePageShadowRoot
            .find('d2l-input-textarea#inputTextarea')
            .shadowRoot()
            .find('textarea');
            
        this.copyButton =this.samplePageShadowRoot.find('button').withText("Copy & Paste");

        this.pastedText = this.samplePageShadowRoot.find('input#pastedText');

        this.pastedTextarea = this.samplePageShadowRoot.find('textarea#pastedTextarea');
    }

    async runProject() {
        await t.click(this.runProjectButton);
    }

    async fillText(inputText) {
        await t.typeText(this.inputText, inputText);
    }

    async fillTextarea(inputTextarea) {
        await t.typeText(this.inputTextarea, inputTextarea);
    }

    async copyAndPasteText() {
        await t.click(this.copyButton);
    }
}

export default SamplePage;