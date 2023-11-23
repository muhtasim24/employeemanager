package tech.mmushfiq.employeemanager.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String message) {
        super(message);
        // going to call the construcotr on the class and take the passed down message
    }
    
}
