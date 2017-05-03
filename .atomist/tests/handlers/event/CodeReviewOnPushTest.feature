Feature: CodeReviewOnPush handler handles events
  The CodeReviewOnPush event handler should
  respond with the appropriate message.
  This is a sample test.

  Scenario: Executing a sample event handler
    Given the CodeReviewOnPush is registered
    When a new Tag is received
    Then the CodeReviewOnPush event handler should respond with the correct message
