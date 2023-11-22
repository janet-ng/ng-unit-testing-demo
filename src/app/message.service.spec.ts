import { MessageService } from "./message.service"

// isolated tests for service with no dependencies 

describe('MessageService', () => {
    let service: MessageService;

    beforeEach(() => {
        // service = new MessageService();  - can move to arrange stages below
    })

    it('should have no messages to start', () => {
        service = new MessageService();  // arrange - initial state

        // act - none

        expect(service.messages.length).toBe(0); // assert - no messages
    })

    it('should add a message when add is called', () => {
        service = new MessageService();  // arrange - initial state

        service.add('message1');  // act

        expect(service.messages.length).toBe(1); // assert - 1 message
    })

    it('should remove all messages when clear is called', () => {
        service = new MessageService();  // arrange - initial state
        service.add('message1');

        service.clear();  // act

        expect(service.messages.length).toBe(0); // assert - 1 message
    })

})