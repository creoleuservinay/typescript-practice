"use strict";
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('Error accured', 500);
