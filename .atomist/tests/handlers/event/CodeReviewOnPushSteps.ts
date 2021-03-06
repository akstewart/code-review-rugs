import { DirectedMessage } from "@atomist/rug/operations/Handlers";
import { EventHandlerScenarioWorld, Given, Then, When } from "@atomist/rug/test/handler/Core";

import { Tag } from "@atomist/cortex/stub/Tag";

Given("the CodeReviewOnPush is registered", (w: EventHandlerScenarioWorld) => {
    w.registerHandler("CodeReviewOnPush");
});

When("a new Tag is received", (w: EventHandlerScenarioWorld) => {
    const event = new Tag();
    w.sendEvent(event);
});

Then("the CodeReviewOnPush event handler should respond with the correct message",
    (w: EventHandlerScenarioWorld) => {
        const expected = `Tag event received`;
        const message = (w.plan().messages[0] as DirectedMessage).body;
        return message === expected;
    });
