package com.bao.api.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;

import java.util.Date;

@Data

@FieldDefaults(level = AccessLevel.PRIVATE)
public class HttpResponse {
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MM-dd-yyyy HH:mm:ss", timezone = "Asia/Ho_Chi_Minh")
    Date timestamp;

    int httpStatusCode;

    HttpStatus httpStatus;
    String reason;

    String message;

    public HttpResponse( int httpStatusCode, HttpStatus httpStatus, String reason, String message) {
        this.timestamp = new Date();
        this.httpStatusCode = httpStatusCode;
        this.httpStatus = httpStatus;
        this.reason = reason;
        this.message = message;
    }
}
