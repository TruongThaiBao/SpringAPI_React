package com.bao.api.controller;

import org.apache.commons.io.FileUtils;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/api/file")
public class FileController {

    @GetMapping(value = "/image/{fileName}", produces = MediaType.IMAGE_JPEG_VALUE)
    @ResponseBody
    public ResponseEntity<byte[]> getFile(@PathVariable String fileName) {
        try {
            Path file = Paths.get("upload","image").resolve(fileName);
            Resource resource = new UrlResource(file.toUri());

            if (resource.exists() || resource.isReadable()) {
                return  new ResponseEntity<>(FileUtils.readFileToByteArray(resource.getFile()), HttpStatus.OK);
            } else {
                throw new RuntimeException("Could not find the image");
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
